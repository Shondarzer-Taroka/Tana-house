import { useContext,useState,} from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {  useLocation,useNavigate } from 'react-router-dom';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const LogIn = () => {

  let {signInBygitHub,signingByEmailAndPassword,signInBygoogle}=useContext(AuthContext)
  let [toggle,setToggle]=useState(false)
  let [erroring,setErroring]=useState('')
  let [success,setSuccess]=useState('')
  let navigate= useNavigate()
   let loc=useLocation() 
   console.log(loc);

  function handleToggle() {
    setToggle(!toggle)
  }

    // const {signInBygoogle}=useContext(AuthContext)
    function handleRegisterBygoogle() {
        signInBygoogle()
        .then((result)=>{
            let googleUser=result.user 
            navigate(loc?.state ? loc.state : '/')
            toast.success('successfully log in')
            console.log(googleUser);
        })
        .catch(er=>{
          toast.error(er.message)
            console.log(er);
        })
    }

    function handleRegisterBygitHub() {
      signInBygitHub()
      .then((result)=>{
          let gitUser=result.user 
          navigate(loc?.state ? loc.state : '/')
          toast.success('successfully log in')
          console.log(gitUser);
      })
      .catch(er=>{
          console.log(er);
          toast.error(er.message)
      })
  }



  const onsubmit = (e) => {
    e.preventDefault()
    // let email=e.target.email.value 
    let email=e.target.email.value
    let password=e.target.password.value     
    // setErroring('')
  //  console.log(email,password);

   if (password.length<6) {
    // console.log('take at least 6 characters');
     setErroring('take at least 6 characters')
  return ;
 
    
   }
   else if (!/[A-Z]/.test(password)) {
     setErroring('take one uppercase')
   return;
    // console.log('take one uppercase');
   }
   else if (!/[a-z]/.test(password)) {
    setErroring('take one lowercase')
    return;
    // console.log('take one lowercase');
   }
   
   setErroring('')
   setSuccess('')
   signingByEmailAndPassword(email,password)
   .then((result)=>{
    let emailUser=result.user 
    navigate(loc?.state ? loc.state : '/')
    console.log(emailUser);
    toast.success('Successfully Log In')
    setSuccess('Successfully registered')
    
   })
   .catch(er=>{
  toast.error('Not Matched')
    console.log(er);
   })
  //  console.log(erroring);
  }

    return (

<div className="hero min-h-screen bg-base-200">
  <Helmet>
    <title>Log In</title>
  </Helmet>
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={onsubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
             <input type={toggle? 'text' : 'password'} placeholder="password" name="password" className="input input-bordered"  />
             <span onClick={handleToggle} className="absolute bottom-[17px] right-[3px]">
              {toggle ? <FaEye /> :<  IoEyeOffSharp /> }
            
             </span>
           
          </div>
          { <span className="text-red-500">{erroring}</span> }
          {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h1 className="my-5 pl-6">Or Log In with </h1>
        <div className="form-control flex gap-4 p-5">
        
        <button onClick={handleRegisterBygoogle} className="btn btn-outline"> <FaGoogle></FaGoogle> <span> Google</span></button>
        <button onClick={handleRegisterBygitHub} className="btn btn-outline"> <FaGithub></FaGithub> <span>GitHub</span> </button>
                <p>Not Registered? <Link to={'/reg'}>please Register</Link> </p>
        </div>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</div>
    );
};

export default LogIn;