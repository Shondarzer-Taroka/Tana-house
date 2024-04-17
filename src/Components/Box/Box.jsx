// import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
const Box = ({box}) => {
    let {id,image,estate_title,segment_name,price,area,location,facilities,status}=box
    // let loc=useLocation() 
    // console.log(loc);
    // console.log(facilities);
    return (
        <div id='container-box' className='border-2 rounded-xl'> 
            <div id='img' className='relative'>
                <div className='h-[240px]'> 
                <img className='w-full h-full rounded-xl' src={image} alt="" />      
                </div>
                 
                 <span className= ' rounded text-center absolute top-[0] right-[0] bg-[#7ab543ab] text-white px-4 py-1 rounded-tl-lg rounded-bl-3xl'>
                    for {status}
                </span> 
                 <span className= ' rounded text-center absolute bottom-[0] right-[0] bg-[#181818ab] text-white px-4 py-1 rounded-tl-lg rounded-bl-3xl'>
                     {price}
                </span> 
            </div>
        

            <div id='content' className='p-4 space-y-2'>
             <h2 className='font-bold text-2xl'>{estate_title}</h2>
            <p id='location' className='flex gap-2 items-center text-[#6f6f70]'><IoLocationSharp /> <span>{location}</span> </p>
            <hr />
            <div id='facilities' className='flex gap-3 text-[#6f6f70] items-center'>
             {facilities.map((value,indx)=>{
               return <p key={indx}>{value}</p>
             })}
            </div>
              <Link to={`/box/${id}`}> <button className='btn btn-outline mt-3'> view property  </button></Link>
            </div>
        </div>
    );
};

export default Box;