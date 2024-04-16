import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData, ScrollRestoration } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import 'animate.css';
const EstateDetails = () => {

    let data = useLoaderData()
    let { id } = useParams()
    let loc = useLocation()
    console.log(loc);
    //    console.log(id);
    let finding_data = data.find(value => value.id == id)
    console.log(finding_data);

    let { image, estate_title, segment_name, description, price, status, area, location, facilities } = finding_data
    return (
     
        <section id="estate-container" className="p-3 md:p-1" >
               <Helmet>
                <title>Estate Details</title>
               </Helmet>
            <ScrollRestoration></ScrollRestoration>
            <aside className='h-[500px] w-full lg:w-[1152px]'  style={{backgroundImage:`url(${image})`, backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>
         {/* <div className="hero-overlay bg-opacity-60"></div> */}
             <div className="h-full w-full text-4xl font-bold  flex items-center justify-center bg-[#7c787883] font-poppins mb-9 animate__animated animate__fadeInDown" > <p className="text-white">{estate_title}</p> </div>
         </aside>
            <aside>

                {/* <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/jzFwmRx/istockphoto-501619270-612x612.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{estate_title}</h1>
                          
                        </div>
                    </div>
                </div> */}
            </aside>

            <aside className="mt-10 ">
                <article>
                    <div>
                        <span className="text-3xl font-bold ">Description:</span> <span>{description}</span>
                    </div>

                    <div className="h-[2px] w-full bg-slate-200 mt-5"></div>

                    <h1 className="text-3xl font-bold mt-5">Essential Information</h1>

                    <aside className="grid grid-cols-1 md:grid-cols-2 mt-4">
                        <div>
                            <div className="flex items-center"><TiTick className="text-[#71b100] text-[25px] font-normal" />
                                <p className=""> segment name: {segment_name}  </p>
                            </div>
                            <div className="flex items-center"><TiTick className="text-[#71b100] text-[25px] font-normal" />
                                <p className=""> status: {status}  </p>
                            </div>
                            <div className="flex items-center"><TiTick className="text-[#71b100] text-[25px] font-normal" />
                                <p className=""> price: {price}  </p>
                            </div>
                            <div className="flex items-center"><TiTick className="text-[#71b100] text-[25px] font-normal" />
                                <p className=""> area: {area}  </p>
                            </div>

                            <div className="flex items-center"><TiTick className="text-[#71b100] text-[25px] font-normal" />
                                <p className=""> location: {location}  </p>
                            </div>
                        </div>

                     
                        <div>
                           
                            <h1 className="text-xl font-semibold"> facilities:</h1>
                         
                            {

                                facilities.map((value) => {
                                    return (
                                        <>
                                            <div className="flex items-center"><TiTick className="text-[#71b100] text-[25px] font-normal" />
                                                <p className="">  {value}  </p>
                                            </div>
                                        </>
                                    )
                                })

                            }
                        </div>
                    </aside>
                </article>


            </aside>
        </section>


    );
};

export default EstateDetails;