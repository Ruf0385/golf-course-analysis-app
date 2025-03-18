import React, { createContext, useState, ReactNode } from 'react';
import SubscriptionPopup from './Popup/SubscriptionPopup';

interface SubscriptionContextType {
  showSubscriptionPopup: () => void;
  hideSubscriptionPopup: () => void;
  isSubscriptionPopupVisible: boolean;
}

export const SubscriptionContext = createContext<SubscriptionContextType>({
  showSubscriptionPopup: () => {},
  hideSubscriptionPopup: () => {},
  isSubscriptionPopupVisible: false,
});

interface SubscriptionManagerProps {
  children: ReactNode;
}

const SubscriptionManager: React.FC<SubscriptionManagerProps> = ({ children }) => {
  const [isSubscriptionPopupVisible, setIsSubscriptionPopupVisible] = useState(false);

  const showSubscriptionPopup = () => {
    setIsSubscriptionPopupVisible(true);
  };

  const hideSubscriptionPopup = () => {
    setIsSubscriptionPopupVisible(false);
  };

  return (
    <SubscriptionContext.Provider
      value={{
        showSubscriptionPopup,
        hideSubscriptionPopup,
        isSubscriptionPopupVisible,
      }}
    >
      {children}
      {isSubscriptionPopupVisible && <SubscriptionPopup onClose={hideSubscriptionPopup} />}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionManager;
