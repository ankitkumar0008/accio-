import { useContext } from "react";
import { NotificationContext } from "../context /NotificationContext";

const NotificationControls = () => {
  const { showMessage } = useContext(NotificationContext);

  return (
    <button onClick={() => showMessage("This is a notification!")}>
      Show Notification
    </button>
  );
};

export default NotificationControls;
