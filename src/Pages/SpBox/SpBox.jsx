import { useEffect, useState } from "react";
import Item from "./Item/Item";
import '../../Components/Style/Pclass/Pclass.css'
const SpBox = () => {
  let [spBox,setSpBox]=useState([])
    useEffect(()=>{
        fetch('/premiumhouse.json')
        .then(res=> res.json())
        .then(data=> setSpBox(data))
    },[])
    return (
        <> 
    <h2 className="ty text-3xl font-bold text-center my-3 " data-aos="fade-left" data-aos-delay='5000'  data-aos-duration='1000'>Our Premium Properties</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
            {spBox.map((value,indx)=>  <Item key={indx}  item={value} ></Item>  )}
        </section>
        </>);
};

export default SpBox;