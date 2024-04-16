
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    
    let navigate=useNavigate()

    function goBack() {
        navigate(-1)
    }
    function goHome() {
        navigate('/')
    }
    return (
        <div className='flex justify-center items-center flex-col h-[400px]'> 
        <Helmet>
            <title>ERROR PAGE</title>
        </Helmet>
        <div  className=''>
            <h1 className='text-[80px] font-bold font-poppins text-center'>404</h1>
            <button className='btn btn-info mr-2' onClick={goBack}>Go Back</button>
            <button className='btn btn-info' onClick={goHome}>Home</button>
        </div>

        </div>
    );
};

export default Error;