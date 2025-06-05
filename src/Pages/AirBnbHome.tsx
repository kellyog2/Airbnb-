import Google from "../assets/Google.png";
import Apple from "../assets/Apple.png";
import Email from "../assets/mail-01.png";
import Facebook from "../assets/Vector.png";
import { useState } from "react";
import LgHomepage from "./LgHomepage";



const AirBnbHome = () => {
  const [continueClicked, setContinueClicked] = useState(false);

  if(continueClicked)
    return <LgHomepage/>
  return (
    <div className="min-h-screen flex items-center justify-center w-full absolute top-0 bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Welcome to Airbnb</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Country/Region</label>
          <select className="mt-1 block w-full rounded-md border border-gray-300 p-2">
            <option value="uk">United Kingdom (+44)</option>
            <option value="in">India (+91)</option>
            <option value="pk">Pakistan (+92)</option>
            <option value="us">United States (+1)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <p className="text-xs text-gray-500 mb-4">
          We’ll call or text you to confirm your number. Standard message and data rates apply.
          <span className="text-blue-600 cursor-pointer ml-1">Privacy Policy</span>
        </p>

        <button
        onClick={() => setContinueClicked(true)}
          className="w-full bg-pink-500 text-white py-2 rounded-md mb-4 hover:bg-pink-600">
          Continue
        </button>

        <div className="text-center text-gray-500 mb-4">or</div>

        <div className="w-full max-w-md mx-auto mt-5 space-y-3">
          <button className="w-full border relative border-gray-300 rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <img src={Facebook} alt="Facebook" className="w-5 h-5 absolute left-4" />
            Continue with Facebook
          </button>

          <button className="w-full border relative border-gray-300 rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <img src={Google} alt="Google" className="w-5 h-5 absolute left-4 " />
            Continue with Google
          </button>

          <button className="w-full border relative border-gray-300 rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <img src={Apple} alt="Apple" className="w-5 h-5 absolute left-4" />
            Continue with Apple
          </button>

          <button className="w-full border relative border-gray-300 rounded-md py-2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <img src={Email} alt="Email" className="w-5 h-5  absolute left-4" />
            Continue with email
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirBnbHome;