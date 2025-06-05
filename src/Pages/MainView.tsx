import { useState } from "react";
import AirBnbHome from "./AirBnbHome";
import LandingPages from "../component/LandingPages";

function MainView() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <LandingPages />
      ) : (
        <AirBnbHome onContinue={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default MainView;