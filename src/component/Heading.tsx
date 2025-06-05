import Amazing from "../assets/Amazing views.png"
import Cabins from "../assets/Cabins.png"
import beachFront from "../assets/Beachfronts.png"
import Skiing from "../assets/Skiing.png"
import grand from "../assets/Grand pianos.png"
import mansion from "../assets/Mansions.png"
import Omg from "../assets/OMG!.png"
import pools from "../assets/Icon.png"
import luxe from "../assets/Icon-1.png"
import boats from "../assets/Icon-2.png"
import lakefront from "../assets/Icon-3.png"
import treehouse from "../assets/Treehouses.png"
import filter from "../assets/Frame 625773.png"
import left from "../assets/Frame 625775.png"


function Heading() {
  return (
        <div className="flex items-center gap-15 py-2 w-full shadow-sm p-2 absolute top-20   z-10 px-4">
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={Amazing} alt="" className="mb-1"/>
    <p> Amazing views</p>
    </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={Cabins} alt=""className="mb-1" />
    <p>Cabins</p>
    </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={beachFront} alt=""className="mb-1" />
    <p>Beachfront</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={Skiing} alt="" className="mb-1"/>
    <p>Skiing</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={grand} alt="" className="mb-1"/>
    <p>Grand pianos</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={mansion} alt="" className="mb-1"/>
    <p>Mansions</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={Omg} alt="" className="mb-1"/>
    <p>OMG!</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={pools} alt="" className="mb-1"/>
    <p>Amazing pools</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={luxe} alt="" className="mb-1"/>
    <p>Luxe</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={boats} alt="" className="mb-1"/>
    <p>Boats</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={lakefront} alt=""className="mb-1" />
    <p>Lakefront</p>
  </div>
  <div className="flex flex-col items-center min-w-fit text-sm text-gray-700 hover:text-black cursor-pointer">
    <img src={treehouse} alt="" className="mb-1"/>
    <p>Treehouses</p>
  </div>
    <div className="ml-auto flex-shrink-0">
<img src={left} alt="" />
</div>
  <div className="ml-auto w-35  relative z-10">
<img src={filter} alt="" />
  </div>
  </div>
  
  )
}

export default Heading
