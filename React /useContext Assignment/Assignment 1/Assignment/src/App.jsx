import "./App.css";
import Greetings from "./components/Greetings";
import LanguageProvider from "./context/LanguageProvider";


function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <LanguageProvider>
          <Greetings></Greetings>
        </LanguageProvider>
        
      </div>
    </div>
  )
}

export default App;