import "./App.css";
import NotificationBar from "./component/NotificationBar";
import NotificationControls from "./component/NotificationControls";
import NotificationProvider from "./context /NotificationProvider";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <NotificationProvider>
          <NotificationBar></NotificationBar>
          <NotificationControls></NotificationControls>
        </NotificationProvider>
      </div>
    </div>
  )
}

export default App;