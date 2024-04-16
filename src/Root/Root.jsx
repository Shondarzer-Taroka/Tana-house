import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
const Root = () => {
    return (
        <section>
               <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
             <Outlet></Outlet>
             
        </div>
        <div className="h-[50px]"></div>
        <div>
            <Footer></Footer>
        </div>
       
        </section>
     
    );
};

export default Root;