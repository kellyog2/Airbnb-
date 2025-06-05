import React from 'react'
import { useState } from "react";
import Internet from "../assets/Frame.png";
import Pounds from "../assets/£.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png"

function Footer() {
     const tabs = [
    "Popular", "Historic", "Coastal", "Islands", "Lakes",
    "Unique stays", "Categories", "Things to do"
  ];

  const destinations = Array.from({ length: 20 }, (_, index) => ({
    city: "Aberfeldy",
    type: [
      "Holiday rentals", "Flat rentals", "Villa rentals",
      "Cottage rentals", "House rentals",
    ][index % 5],
  }));

  const [activeTab, setActiveTab] = useState("Popular");
  const [visibleCount, setVisibleCount] = useState(11);

  const handleShowMore = () => setVisibleCount(destinations.length);
  return (
    <div className='w-full top-450 absolute'>
       <main className="flex-grow px-6 py-10 space-y-12">
        
        <h2 className="text-2xl font-semibold">Inspiration for future getaways</h2>

        
        <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-600 pb-3">
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 border-b-2 cursor-pointer transition ${
                activeTab === tab ? "text-black" : "hover:text-black"
              }`}
            >
              {tab}
            </p>
          ))}
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4 text-sm text-gray-700 transition-all duration-300">
          {destinations.slice(0, visibleCount).map((item, idx) => (
            <div key={idx}>
              <div className="font-semibold text-black">{item.city}</div>
              <div>{item.type}</div>
            </div>
          ))}

          {visibleCount < destinations.length && (
            <div>
              <p
                onClick={handleShowMore}
                className="text-black underline font-medium hover:text-gray-800 cursor-pointer"
              >
                Show more <span className="ml-1">▾</span>
              </p>
            </div>
          )}
        </div>
      </main>

     
      <section className="bg-gray-100 px-6 py-10 text-sm text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 hover:underline">
              <li>Help centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concerns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2 hover:underline">
              <li>Airbnb your home</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Airbnb</h3>
            <ul className="space-y-2 hover:underline">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>
      </section>

     
      <footer className="bg-gray-100 px-6 py-10 text-gray-600 w-full text-sm">
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>© 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <span className="cursor-pointer flex"><img src={Internet} alt="" /> English (US)</span>
            <span className="cursor-pointer flex"><img src={Pounds} alt="" /> GBP</span>
            <span className="flex gap-3">
              <img src={Facebook} alt="w-4 h-4" />
              <img src={Twitter} alt="w-4 h-4" />
              <img src={Instagram} alt="w-4 h-4" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
