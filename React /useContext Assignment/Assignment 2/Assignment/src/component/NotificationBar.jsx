import { useContext } from "react";
import { NotificationContext } from "../context /NotificationContext";

const NotificationBar = () => {
  const { message, clearMessage } = useContext(NotificationContext);

  if (message === null) return null;

  return (
    <div>
      <span>{message}</span>
      <button onClick={clearMessage}>✖</button>
    </div>
  );
};

export default NotificationBar;
