import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>

      <section className="bg-[#fd7d45dc]">
        <aside className="p-3">
          <menu className="flex justify-evenly items-center">
            <div className="w-1/3 h-[5px] bg-white"></div>
            <div className="text-white font-bold">Get in touch</div>
            <div className="w-1/3 h-[5px] bg-white"></div>
          </menu>

          <menu id="content" className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 py-5">
            <div>
              <p> <Link className="underline" to={'/'}>Home</Link></p>
              <p> <Link className="underline" to={'/update'}>Update Profile</Link></p>
              <p> <Link className="underline" to={'/premium'}>Premium Properties</Link></p>
             
              
         
            </div>

            <div>
              <p>
              TaNa House is a leading website renowned for its exceptional service and expertise. It prides itself on delivering a seamless user experience and providing top-quality content curated by a dedicated team of experts.</p>
            </div>

            <div>
              <div className="form-control">


                <div className="md:flex gap-0 items-center">
                  <input type="email" placeholder="usermail@gmail.com" name="email" className="input input-bordered" />
                  <button className="btn btn-success">subscribe</button>
                </div>
              </div>
            </div>

       

          </menu>

          <menu>
            <div className="w-full h-[6px] bg-white rounded-3xl"></div>
            <div>
              <h1 className="text-center mb-2 font-bold ">follow us</h1>
              <div className="flex gap-2 justify-center">
                <FaFacebook className="text-[30px]"></FaFacebook>
                <FaGithub className="text-[30px]"></FaGithub>
                <FaInstagram className="text-[30px]"></FaInstagram>
                <FaYoutube className="text-[30px]"></FaYoutube>
              </div>
            </div>

            <div className="text-center mt-3" >
              {/* <h1 className="text-4xl font-semibold">Fitro</h1> */}
              <small> <span className="text-2xl font-semibold">TaNa House</span> All Rights Reserved</small>
            </div>
          </menu>

        </aside>
      </section>

    </>);
};

export default Footer;