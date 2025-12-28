import { useState } from "react";
import { NotificationContext } from "./NotificationContext";

const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showMessage = (text) => {
    setMessage(text);
  };

  const clearMessage = () => {
    setMessage(null);
  };

  return (
    <NotificationContext.Provider
      value={{ message, showMessage, clearMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
