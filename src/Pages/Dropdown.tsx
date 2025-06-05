import { useState, useRef, useEffect } from "react";
import Menu from "../assets/menu-01.png";
import Vector from "../assets/Frame (2).png";

type DropdownProps = {
  onLogIn: () => void;
};

function Dropdown({ onLogIn }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-full hover:border"
      >
        <img src={Menu} alt="Menu" className="w-5 h-5" />
        <img src={Vector} alt="avatar" className="w-7 h-7 pointer-events-none" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50">
          <div className="py-2 border-b">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Messages</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Trips</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Wishlist</button>
          </div>
          <div className="py-2">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Manage listings</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Account</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Help centre</button>
            <button
              onClick={onLogIn}
              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;