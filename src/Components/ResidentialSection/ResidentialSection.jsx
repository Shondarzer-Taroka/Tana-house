import { useEffect, useState } from "react";
import Box from "../Box/Box";

const ResidentialSection = () => {
   let [box,setBox]= useState([])
    useEffect(()=>{
        fetch('/residential.json')
        .then(res=> res.json())
        .then(data => setBox(data))
    },[])
    return (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {box.map((value,indx)=>    <Box key={indx } box={value}></Box>)}
         
        </div>
    );
};

export default ResidentialSection;