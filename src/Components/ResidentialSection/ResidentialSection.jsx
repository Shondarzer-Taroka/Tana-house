import { useEffect, useState } from "react";
import Box from "../Box/Box";
import '../Style/media/media.css'
const ResidentialSection = () => {
   let [box,setBox]= useState([])
    useEffect(()=>{
        fetch('/residential.json')
        .then(res=> res.json())
        .then(data => setBox(data))
    },[])
    return (
        <section className="">
            <h2 className="text-4xl font-poppins font-bold text-center py-4"> Properties</h2>
                    <div className="mrt mrt2 mrt3 md:mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {box.map((value,indx)=>    <Box key={indx } box={value}></Box>)}
         
        </div>
        </section>

    );
};

export default ResidentialSection;