import { useState } from "react";
import AirBnbHome from "./AirBnbHome";
import LandingPages from "../component/LandingPages";

function MainView() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will be passed to LandingPages's onContinue prop.
  // When LandingPages triggers this, it means the user wants to "log out" or return
  // to the initial AirBnbHome login screen.
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        // When the user is logged in, show LandingPages (which now represents the main app content).
        // Pass a function to onContinue that will set isLoggedIn back to false,
        // effectively logging the user out or returning them to AirBnbHome.
        <LandingPages onContinue={handleLogout} />
      ) : (
        // When the user is not logged in, show AirBnbHome (your login/signup view).
        // The onContinue prop here will set isLoggedIn to true upon successful action.
        <AirBnbHome onContinue={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default MainView;