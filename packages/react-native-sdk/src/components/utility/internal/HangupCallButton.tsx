import React, { useCallback } from 'react';
import { CallControlsButton } from './CallControlsButton';
import { theme } from '../../../theme';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { PhoneDown } from '../../../icons';
import { A11yButtons } from '../../../constants/A11yLabels';
import { useCall, useCallCallingState } from '@stream-io/video-react-bindings';
import { CallingState } from '@stream-io/video-client';

/**
 * The props for the Hang up call button in the Call Control View.
 */
export type HangUpCallButtonType = {
  /**
   * Handler to override the hang up handler when the hangup button is pressed.
   * @returns void
   */
  onPressHandler?: () => void;

  /**
   * Style of the Button Container
   */
  style?: StyleProp<ViewStyle>;
};

export const HangUpCallButton = ({
  onPressHandler,
  style,
}: HangUpCallButtonType) => {
  const call = useCall();
  const callingState = useCallCallingState();

  const hangUpCallHandler = useCallback(async () => {
    if (onPressHandler) {
      onPressHandler();
      return;
    }
    try {
      if (callingState === CallingState.LEFT) {
        return;
      }
      await call?.leave();
    } catch (error) {
      console.error('Error leaving call:', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [call]);

  return (
    <CallControlsButton
      onPress={hangUpCallHandler}
      color={theme.light.error}
      style={[styles.button, { shadowColor: theme.light.error }, style]}
      accessibilityLabel={A11yButtons.HANG_UP_CALL}
    >
      <PhoneDown color={theme.light.static_white} />
    </CallControlsButton>
  );
};

const styles = StyleSheet.create({
  button: {
    // For iOS
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    // For android
    elevation: 6,
  },
});