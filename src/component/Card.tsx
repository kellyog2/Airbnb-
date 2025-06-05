
type CardProps = {
  image: string;
  location: string;
  rating: number;
  title: string;
  date: string;
  price: string;

};
function Card ({image, location, rating, title, date, price }= CardProps) {
  return (
    <div className="px-4 max-w-xs flex-shrink-0">
      <div className="rounded-xl shadow-sm">
        <div className="relative">
          <img src={image} alt="Property" className=" h-70 rounded-2xl w-full  object-cover" />
        </div>
        <div className="p-3">
          <div className="flex justify-between text-sm font-semibold">
            <p>{location}</p>
            <p>★ {rating}</p>
          </div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-gray-500 text-sm">{date}</p>
          <p className="mt-1 text-sm font-semibold underline">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;