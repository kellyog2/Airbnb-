import { useState } from "react";
import LandingPages from "./component/LandingPages";
import LgHomepage from "./Pages/LgHomepage"; 

function App() {
const [showMainContent, setShowMainContent] = useState(false);
const handleContinueToMainContent = () => {
    setShowMainContent(true);
  };

  return (
    <div>
      {showMainContent ? ( <LgHomepage />
      ) : 
      (<LandingPages onContinue={handleContinueToMainContent} />
      )}
    </div>
  );
}

export default App;