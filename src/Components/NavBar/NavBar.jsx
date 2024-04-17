import { Link, NavLink } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";
import '../Style/NavLinking/nav.css'
const NavBar = () => {
    let { user, signingOut, loading } = useContext(AuthContext)
    function signingOutFromFirebase() {
        signingOut()
            .then()
            .catch()
    }
    console.log(user?.photoURL);
    let navlinks = <>
        <li><NavLink to={'/'} >Home</NavLink></li>
        <li><NavLink to={'/update'} >Update Profile</NavLink></li>
        <li><NavLink to={'/gallery'} >Premium Properties</NavLink></li>
    </>
    return (
        <div className=" navbar bg-base-100 font-poppins">
            <div className="navbar-start">
                <div className="dropdown">
                    {/* btn btn-ghost */}
                    <div tabIndex={0} role="button" className=" mr-1 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu z-50 menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className=" md:text-4xl font-bold font-poppins flex items-center"> <span>TaNa </span>  <span className="md:text-2xl text-red-400">House</span></a>
            </div>
            <div className=" navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    loading ? <h1>loading</h1> : <div className="flex gap-1">
                        {user ? <div className="flex items-center gap-2"> <div className="tooltip tooltip-bottom" data-tip={user?.displayName}> {user.photoURL ? <img className=" w-[50px] h-[50px] rounded-full border-[1px] " src={user.photoURL} alt="" /> : <FaCircleUser className="text-3xl" />}  </div> <button onClick={signingOutFromFirebase} className="btn p-2 ">sign out</button>  </div> : <Link to={'/log'}> <button onClick={''} className="btn">Log In</button> </Link>}

                    </div>
                }


                {/* <div className="flex gap-1">
                    {user ? <div className="flex items-center gap-2"> <div className="tooltip tooltip-bottom" data-tip={user?.displayName}> <img  className=" w-[50px] h-[50px] rounded-full border-[1px] " src={user.photoURL} alt="" /> </div> <button onClick={signingOutFromFirebase} className="btn">sign out</button>  </div> : <button onClick={signingOutFromFirebase} className="btn"><Link to={'/log'}>Log In</Link></button>}

                </div> */}

            </div>
        </div>
    );
};
{/* { user && <div> <img className="w-[60px] h-[60px] border-red-300" src={user.photoURL} alt="" /> </div> } */ }
export default NavBar;