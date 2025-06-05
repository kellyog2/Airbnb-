import { useState } from "react";
import frame from "../assets/Frame (3).png"

function MapToggle() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative min-h-screen p-4">
      <button
        onClick={() => setShowMap(!showMap)}
        className="fixed flex gap-2 left-205 bottom-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700 transition"
      > 
        {showMap ? "Hide map" : "Show map"}
        <img src={frame} alt="" className="w-4 h-4 p-0 mt-1" />
      </button>

      {showMap && (
        <div className="fixed bottom-30 left-120 z-40 w-[800px] h-[600px] shadow-lg border border-gray-300 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999386403439!2d2.294481315674397!3d48.85837007928785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fda02d11e87%3A0x6d4f30b22d6b7a51!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1717328088089!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default MapToggle;