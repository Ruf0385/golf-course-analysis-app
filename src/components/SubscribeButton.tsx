import React, { useContext } from 'react';
import Button, { ButtonProps } from './Button';
import { SubscriptionContext } from './SubscriptionManager';

interface SubscribeButtonProps extends Omit<ButtonProps, 'onClick'> {
  children: React.ReactNode;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ children, ...props }) => {
  const { showSubscriptionPopup } = useContext(SubscriptionContext);

  return (
    <Button
      {...props}
      onClick={showSubscriptionPopup}
    >
      {children}
    </Button>
  );
};

export default SubscribeButton;
