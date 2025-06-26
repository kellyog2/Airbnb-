import { useEffect, useState } from "react";
import frame from "../assets/Frame 1.jpg";
import search from "../assets/Frame 625776.png";
import internet from "../assets/Property 1=Component 27.png";
import Footer from "../Pages/Footer";
import Heading from "./Heading";
import Lists from "./Lists";
import Dropdown from "../Pages/Dropdown";
import AirBnbHome from "../Pages/AirBnbHome";
import MapToggle from "../Pages/MapToggle";


interface LandingPagesProps {
  onContinue: () => void;
}

function LandingPages({ onContinue }: LandingPagesProps) {
  const [loggedOut, setLoggedOut] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        setError('Network error: please check your internet connection.');
        setLoading(false);
      } else {
        setError(null);
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className=" bg-red-200 min-h-screen flex justify-center items-center text-red-500 text-lg">{error}</div>
    );
  }

  if (loggedOut) {
    return <AirBnbHome onContinue={onContinue} />;
  }

  return (
    <div>
      <div className="flex flex-col min-h-screen top-0 absolute w-full">
        <header className="w-full shadow-sm p-4 bg-white top-0 z-50">
          <div className="mx-auto flex items-center justify-between">
            <div className="flex ml-2 gap-2">
              <img src={frame} alt="Logo" className="left-5" />
            </div>
            <div className="flex items-center gap-4 rounded-full p-2 shadow-sm hover:shadow-md transition">
              <div className="flex items-center space-x-2">
                <span className="font-medium ">Anywhere</span>
              </div>
              <div className="h-5 border-l border-gray-300" />
              <span className="font-medium">Any week</span>
              <div className="h-5 border-l border-gray-300" />
              <span className="font-medium">Add guest</span>
              <img src={search} alt="" />
            </div>
            <div className="flex items-center gap-4">
              <p className="text-l font-medium">Airbnb your home</p>
              <img src={internet} alt="" className="w-10 h-10" />
              {/* Dropdown should trigger a login action, setting loggedOut to true to show AirBnbHome */}
              <Dropdown onLogIn={() => setLoggedOut(true)} />
            </div>
          </div>
        </header>
      </div>
      <Heading />
      <Lists />
      <Footer />
      <MapToggle />
    </div>
  );
}

export default LandingPages;