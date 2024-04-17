import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";




const UpdateProfile = () => {
    let {user,updateProfiling}=useContext(AuthContext)
    let [gvalue,setgValue]=useState(null)
    let [myImg,setMyImg]=useState('')

    console.log(user);

    function onchanging(e) {
      e.preventDefault()
      //  let photo=e.target.image
       let i= e.target.value
       setgValue(i)
      //  setMyImg(photo)
      //  console.log(i);
    }
    function onchangingimg(e) {
      e.preventDefault()
       let photo=e.target.image
      //  let i= e.target.value
      //  setgValue(i)
       setMyImg(photo)
      //  console.log(i);
    }

    function submit(e) {
      // e.preventDefault()
      e.preventDefault()
      let userName=e.target.name.value
      let photo=e.target.image.value
      console.log(photo);
      // setgValue('')
      updateProfiling(userName,photo)
      .then(()=>{
        location.reload()
      })
      .catch()
    }
    return (
      <> 
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Update Profile</h1>
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={submit}>
              <div className="form-control" >
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" onChange={onchanging} value={gvalue !==null ? gvalue :  user.displayName} placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  disabled={user.email===null}  value={user?.email} placeholder="email" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" onChange={onchangingimg} value={myImg !=='' ? myImg :  user.photoURL} name="image"  placeholder="Photo URL" className="input input-bordered"  />
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-outline">Update Profile</button>

              </div>

              {/* <div className="form-control flex gap-4 p-5">
              
             <button className='btn btn-outline'>Update Profile</button>
              </div> */}
            </form>
      
           
              
      
          </div>
        </div>
      </div>
      
      </>);
};

export default UpdateProfile;

