// App.tsx (Corrected)
import { useState } from "react"; // Import useState
import LandingPages from "./component/LandingPages";
import LgHomepage from "./Pages/LgHomepage"; // Assuming LgHomepage is your main logged-in view

function App() {
  // Manage a state to determine what content to show
  // Let's call it 'isAppReady' or 'isUserLoggedIn' or similar,
  // depending on what 'onContinue' from LandingPages signifies.
  // For simplicity, let's use 'showMainContent'
  const [showMainContent, setShowMainContent] = useState(false);

  // This function will be passed to LandingPages's onContinue prop
  const handleContinueToMainContent = () => {
    setShowMainContent(true);
  };

  return (
    <div>
      {showMainContent ? (
        // If showMainContent is true, render your main application content
        // (e.g., LgHomepage, or a component that wraps LgHomepage)
        <LgHomepage />
      ) : (
        // Otherwise, show the LandingPages, passing the handler
        <LandingPages onContinue={handleContinueToMainContent} />
      )}
    </div>
  );
}

export default App;