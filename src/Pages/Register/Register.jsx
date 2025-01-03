import { useContext, useState } from "react";

import { IoEyeOffSharp } from "react-icons/io5";

import { FaEye } from "react-icons/fa6";
import { Link ,useNavigate,useLocation} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Register = () => {
  let navigate= useNavigate()
  let loc=useLocation() 
  // console.log(loc);
  let [toggle,setToggle]=useState(false)
  let {createUser,updateProfiling}=useContext(AuthContext)

  
    // function
    const onsubmit = (e) => {
      e.preventDefault()
      let email=e.target.email.value 
      let password=e.target.password.value    
      let userName=e.target.name.value
      let photo=e.target.image.value 
    //  console.log(email,password,photo,userName);
    
     if (password.length<6) {
      toast.error('You should take at least 6 characters')
       
    return ;
   
      
     }
     else if (!/[A-Z]/.test(password)) {
      toast.error('You should take an uppercase')
    
     return;
     }
     else if (!/[a-z]/.test(password)) {
      toast.error('You should take a lowercase')
     
      return;
     }
     
     
     
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
      e.target.reset()
      toast.success('Successfully registered')
      setTimeout(()=>{
        navigate(loc?.state ? loc.state : '/')
        location.reload()
      },1000)

      console.log(emailUser);
     
     })
     .catch(er=>{
      //  toast.error(er.message)
      //  let storeError=[]
      //  let errorLetter=er.message.split(' ')[2].split('')
      //  for (let i = 6; i < errorLetter.length-2; i++) {
        
      //   storeError.push(errorLetter[i])
     
        
      //  }
  
      //  toast.error(storeError.join(''))
       er.message=='Firebase: Error (auth/email-already-in-use).' ? toast.error('Email already in used'):''
      console.log(er.message);
     
     
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
  <div className="md:hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register</h1>
     
    </div>
    <div className="my-3 md:my-1 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
          <input type="email" placeholder="email" name="email" className="input input-bordered"  required/>
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
             <input type={toggle? 'text' : 'password'} name="password" required placeholder="password"  className="input input-bordered"  />
             <span onClick={handleToggle} className="absolute bottom-[17px] right-[1px]">
              {toggle ? <FaEye /> :<  IoEyeOffSharp /> }
            
             </span>
            
          </div>
         
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
                <p>Aleady Registered? <Link  to={'/login'}>please <span className="underline text-blue-500 font-semibold">Log In </span> </Link> </p>
               
        </div>

    </div>
  </div>
  <ToastContainer />
</div>
    );
};

export default Register;