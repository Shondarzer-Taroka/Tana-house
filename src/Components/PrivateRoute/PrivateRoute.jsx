import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate ,useLocation} from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
const PrivateRoute = ({children}) => {
    let {user,loading}=useContext(AuthContext)
    let location=useLocation()
    console.log(location);

    console.log(user);
    if (loading) {
      return <div className="flex justify-center items-center ">
     <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      /></div> 
    }
    if (user) {
        return children
    }else{
         return (<Navigate state={location.pathname} to={'/log'}></Navigate>)
    }

   
  
    
};

export default PrivateRoute;