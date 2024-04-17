
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const Item = ({item}) => {
    let {image,title,beds,baths,price,sqr_fit,location,status}=item
    return (
        <div className="border-[2px] rounded-xl">
            <aside className="p-2">
                <div className="relative">
                    <img className="h-[300px] w-full md:w-full rounded" src={image} alt="" />
                    <span className="absolute top-0 left-0 bg-[#53ed1ae4] px-4 rounded-bl-2xl rounded py-1 rounded-tr-2xl"> For {status} </span>
                </div>

            </aside>

            <aside className="p-2">
                <div className="flex gap-3 flex-wrap">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="text-red-500 text-3xl font-bold">${price} </p>
                </div>
                <p className="flex items-center gap-2"> <FaLocationDot className="mr-2" /> <i>{location}</i>  </p>
                
                <div className="my-2">
                   <hr /> 
                </div>
                <div className="flex gap-2">
                    <span className="flex items-center gap-2">
                    <FaBed /> <span> {beds} Beds</span>
                    </span>

                    <span className="flex items-center gap-2" >
                    <FaBath /> <span> {baths} Baths</span>
                    </span>

                   <span className="flex items-center gap-2">
                   <FaVectorSquare />
                   <span> {sqr_fit} sqft </span>
                   </span>
                </div>
            </aside>
        </div>
    );
};

export default Item;