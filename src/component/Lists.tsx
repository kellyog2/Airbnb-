import { useState } from "react";
import image1 from "../assets/Frame 6.png";
import image2 from "../assets/Frame 6-1.png";
import image3 from "../assets/Frame 6-2.png";
import image4 from "../assets/Frame 6-3.png";
import image5 from "../assets/Frame 6-4.png";
import image6 from "../assets/Frame 6-5.png";
import image7 from "../assets/Frame 6-6.png";
import image8 from "../assets/Frame 6-7.png";
import image9 from "../assets/Frame 6-8.png";
import image10 from "../assets/Frame 6-9.png";
import image11 from "../assets/Frame 6-10.png";
import image12 from "../assets/Frame 6-11.png";
import image13 from "../assets/Frame 6-12.png";
import image14 from "../assets/Frame 6-13.png";
import image15 from "../assets/Frame 6-14.png";
import image16 from "../assets/Frame 6-15.png";
import Card from "./Card";

const Listing = [
  {
    image: image1,
    location: "Half Moon Bay, California, US",
    rating: 5.0, 
    title: "Beach and ocean views",
    date: "22–27 Oct · Individual Host",
    price: "£1,634 total",
  },
  {
    image: image2,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image3,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image4,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image5,
    location: "Mountain View, California, US",
    rating: 4.9,
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image6,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image7,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image8,
    location: "Mountain View, California, US",
    rating: 4.9,
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image9,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image10,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image11,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image12,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image13,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image14,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image15,
    location: "Mountain View, California, US",
    rating: 4.9, 
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },

  {
    image: image16,
    location: "Mountain View, California, US",
    rating: 4.9,
    title: "Modern pool house",
    date: "1–5 Nov · Individual Host",
    price: "£1,200 total",
  },
];

function Lists() {
  const [visibleItems, setVisibleItems] = useState(8);

  const handleShowMore = () => {
    setVisibleItems(Listing.length);
  };

  return (
    <div>
      <div className="w-full absolute top-50 pl-0 ">
        <div className=" mx-auto px-35">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Listing.slice(0, visibleItems).map((item, index) => (
              <Card
                key={index}
                image={item.image}
                location={item.location}
                rating={item.rating}
                title={item.title}
                date={item.date}
                price={item.price}
              />
            ))}
          </div>

          {visibleItems < Listing.length && (
            <>
              {" "}
              <div className="flex justify-center mt-10 mb-10 font-semibold">
                <p>Continue exploring amazing views</p>
              </div>
              <div className="flex justify-center mt-10 mb-10 ">
                <button
                  onClick={handleShowMore}
                  className="px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 p-2 transition-colors duration-300"
                >
                  Show More
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lists;