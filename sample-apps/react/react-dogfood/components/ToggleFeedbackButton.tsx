import { forwardRef } from 'react';

import {
  CompositeButton,
  Icon,
  MenuToggle,
  MenuVisualType,
  ToggleMenuButtonProps,
} from '@stream-io/video-react-sdk';

import { Feedback } from './Feedback/Feedback';

const ToggleMenuButton = forwardRef<HTMLDivElement, ToggleMenuButtonProps>(
  function ToggleMenuButton(props, ref) {
    return (
      <CompositeButton ref={ref} active={props.menuShown} variant="primary">
        <Icon icon="feedback" />
      </CompositeButton>
    );
  },
);

export const ToggleFeedbackButton = () => {
  return (
    <MenuToggle
      placement="top-start"
      ToggleButton={ToggleMenuButton}
      visualType={MenuVisualType.PORTAL}
    >
      <Feedback />
    </MenuToggle>
  );
};
