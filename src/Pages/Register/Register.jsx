import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { Link ,useNavigate,useLocation} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from "firebase/auth";
import { auth } from "../../FireBse/fireBase.config";
const Register = () => {
  let navigate= useNavigate()
  let loc=useLocation() 
  console.log(loc);
  let [toggle,setToggle]=useState(false)
  let [erroring,setErroring]=useState('')
  let [success,setSuccess]=useState('')
  let {createUser,updateProfiling}=useContext(AuthContext)
  // let {   
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },}= useForm()
  
    // function
    const onsubmit = (e) => {
      e.preventDefault()
      let email=e.target.email.value 
      let password=e.target.password.value    
      let userName=e.target.name.value
      let photo=e.target.image.value 
     console.log(email,password,photo,userName);

     if (password.length<6) {
       setErroring('take at least 6 characters')
    return ;
   
      
     }
     else if (!/[A-Z]/.test(password)) {
       setErroring('take one uppercase')
     return;
     }
     else if (!/[a-z]/.test(password)) {
      setErroring('take one lowercase')
      return;
     }
     
     setErroring('')
     setSuccess('')
     createUser(email,password)
     .then((result)=>{
      updateProfiling(userName,photo)
      .then(()=>{
        // setSpinner(true)
      })
      .catch(er=>{
        console.log(er);
      })
      // setSpinner(true)
      let emailUser=result.user 
      navigate(loc?.state ? loc.state : '/')
     
      location.reload()
      console.log(emailUser);
      toast.success('Successfully registered')
      setSuccess('Successfully registered')
     })
     .catch(er=>{
      console.log(er);
     })
    }     
    function handleToggle() {
      setToggle(!toggle)
    }


    // function handleRegisterBygoogle() {
    //     signInBygoogle()
    //     .then((result)=>{
    //       let googleUser=result.user 
         
    //       navigate(loc?.state ? loc.state : '/')
    //         console.log(googleUser.photoURL);
    //     })
    //     .catch(er=>{
    //         console.log(er);
    //     })
    // }
    // function handleRegisterBygitHub() {
    //     signInBygitHub()
    //     .then((result)=>{
    //         let gitUser=result.user 
    //         navigate(loc?.state ? loc.state : '/')
    //         console.log(gitUser);
    //     })
    //     .catch(er=>{
    //         console.log(er);
    //     })
    // }



   
    return (
<div className="hero min-h-screen bg-base-200">
  <Helmet>
    <title>Register</title>
  </Helmet>
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={onsubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="image" placeholder="Photo URL" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
             <input type={toggle? 'text' : 'password'} name="password"  placeholder="password"  className="input input-bordered"  />
             <span onClick={handleToggle} className="absolute bottom-[17px] right-[-0px]">
              {toggle ? <FaEye /> :<  IoEyeOffSharp /> }
            
             </span>
            
          </div>
         {erroring && <p className="text-red-500" >{erroring}</p> }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Register</button>
        </div>
      </form>

      {/* <h1 className="m-5">Or Register with </h1> */}
        <div className="form-control flex gap-4 p-5">
        
        {/* <button onClick={handleRegisterBygoogle} className="btn btn-outline"> <FaGoogle></FaGoogle> <span> Google</span></button>
        <button onClick={handleRegisterBygitHub} className="btn btn-outline"> <FaGithub></FaGithub> <span>GitHub</span> </button> */}
                <p>Aleady Register? <Link to={'/log'}>please Log In</Link> </p>
               
        </div>

    </div>
  </div>
  <ToastContainer />
</div>
    );
};

export default Register;