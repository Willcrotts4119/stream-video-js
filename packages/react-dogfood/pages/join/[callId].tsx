import { useEffect } from 'react';
import Gleap from 'gleap';
import { useRouter } from 'next/router';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import { GetServerSidePropsContext } from 'next';
import { createToken } from '../../helpers/jwt';
import {
  StreamVideo,
  StreamMeeting,
  useCreateStreamVideoClient,
} from '@stream-io/video-react-sdk';
import Head from 'next/head';
import { Call, User } from '@stream-io/video-client';

import { useCreateStreamChatClient } from '../../hooks';
import { MeetingUI } from '../../components';

type JoinCallProps = {
  user: User;
  userToken: string;
  apiKey: string;
  gleapApiKey?: string;
};

const JoinCall = (props: JoinCallProps) => {
  const router = useRouter();
  const callId = router.query['callId'] as string;
  const callType = (router.query['type'] as string) || 'default';

  const { userToken, user, apiKey, gleapApiKey } = props;

  const client = useCreateStreamVideoClient({
    apiKey,
    tokenOrProvider: userToken,
    user,
  });

  const chatClient = useCreateStreamChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (gleapApiKey) {
      Gleap.initialize(gleapApiKey);
      Gleap.identify(user.name || user.id, {
        name: user.name,
      });
    }
  }, [gleapApiKey, user.name, user.id]);

  useEffect(() => {
    if (!gleapApiKey) return;

    Gleap.on('flow-started', () => {
      try {
        const { getCurrentValue, ...state } = client.readOnlyStateStore;
        const data = Object.entries(state).reduce<Record<string, any>>(
          (acc, [key, observable]) => {
            if (!!observable && typeof observable.subscribe === 'function') {
              const value = getCurrentValue<unknown>(observable);
              if (key === 'activeCall$' && value) {
                // special handling, the Call instance isn't serializable
                acc[key] = (value as Call).data;
              } else {
                acc[key] = value;
              }
            }
            return acc;
          },
          {},
        );
        console.log('!!State Store', data);
        Gleap.attachCustomData(data);
      } catch (e) {
        console.error(e);
      }
    });
  }, [client.readOnlyStateStore, gleapApiKey]);

  if (!client) {
    return <h2>Connecting...</h2>;
  }

  return (
    <div style={{ flexGrow: 1, minHeight: 0 }}>
      <Head>
        <title>Stream Calls: {callId}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StreamVideo client={client}>
        <StreamMeeting callId={callId} callType={callType}>
          <MeetingUI callId={callId} chatClient={chatClient} />
        </StreamMeeting>
      </StreamVideo>
    </div>
  );
};

export default JoinCall;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );

  if (!session) {
    const url = context.req.url;
    return {
      redirect: {
        destination: `/auth/signin?callbackUrl=${url}`,
      },
    };
  }

  const apiKey = process.env.STREAM_API_KEY as string;
  const secretKey = process.env.STREAM_SECRET_KEY as string;
  const gleapApiKey = process.env.GLEAP_API_KEY as string | undefined;

  const userId = (
    (context.query['user_id'] as string) ||
    session.user?.email ||
    'unknown-user'
  ).replaceAll(' ', '_'); // Otherwise, SDP parse errors with MSID

  // Chat does not allow for Id's to include special characters
  // a-z, 0-9, @, _ and - are allowed
  const streamUserId = userId.replace(/[^_\-0-9a-zA-Z@]/g, '_');
  const userName = session.user?.name || userId;
  return {
    props: {
      apiKey,
      userToken: createToken(streamUserId, secretKey),
      user: {
        id: streamUserId,
        name: userName,
        image: session.user?.image,
      },
      gleapApiKey,
    } as JoinCallProps,
  };
};
