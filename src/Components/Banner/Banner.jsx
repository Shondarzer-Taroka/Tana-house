import { Helmet } from 'react-helmet-async';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Navigation,Autoplay } from 'swiper/modules';


const Banner = () => {

    return (

        <div className=' mt-8'>  
        
        <Swiper
               autoplay={{delay:2000,disableOnInteraction: false}}
               speed={1500}
               loop={true}
               slidesPerView={1}
               spaceBetween={30}
               keyboard={{
                 enabled: true,
               }}
              
               navigation={true}
               modules={[Keyboard, Autoplay, Navigation]}
        >
<SwiperSlide> 
{/* style={{backgroundImage:`url(${bnnn})`, backgroundRepeat:'no-repeat', backgroundSize:"cover"}} */}
{/* <section  data-aos="fade-up-right" data-aos-duration='2000' className=' lg:h-[560px] flex items-center  flex-col-reverse md:flex-row md:justify-evenly' style={{background:'linear-gradient(191deg, rgba(24,52,108,1) 19%, rgba(21,46,76,1) 30%, rgba(121,87,180,1) 97%)'}}>

<aside id="text-content" className='lg:w-[50%] space-y-7 p-14 md:p-1'>
    <h1 className="text-[#fcfcff] text-4xl font-poppins font-bold px-14">WE BUILD <br />
        YOUR DREAM HOME </h1>
    <p className='opacity-90 text-white px-14'> we take pride in being the architects of your dreams,
        transforming your vision of a perfect home
        into a tangible reality </p>
        <button className='px-5 py-2 bg-[#1C1C62] text-white font-poppins'>view property</button>
</aside>

<aside>
<img className='w-[300px] h-[360px] border-[5px] border-black rounded-tl-[29px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[29px] shadow-2xl shadow-black bg-none' src={'https://i.ibb.co/WvRMYmM/bl13.jpg'} alt="" />
</aside>

</section> */}
<section className='lg:h-[560px] flex md:flex-row items-center flex-col-reverse md:justify-evenly'  style={{background:'linear-gradient(191deg, rgba(24,52,108,1) 19%, rgba(21,46,76,1) 30%, rgba(121,87,180,1) 97%)'}}>

<aside id="text-content" className='md:w-[50%] space-y-7 p-12 md:p-1'>
    <h1 className="text-[#fcfcff] text-2xl md:text-4xl font-bold font-poppins" data-aos="fade-left" >WE BUILD <br />
        YOUR DREAM HOME </h1>
    <p className='opacity-90 text-white' data-aos="fade-left" data-aos-delay='1000'> we take pride in being the architects of your dreams,
        transforming your vision of a perfect home
        into a tangible reality </p>
        <button className='px-5 py-2 bg-[#1C1C62] text-white font-poppins  animate__animated animate__fadeInLeft animate__delay-1s'>Get Started</button>
</aside>

<aside className='pt-3 md:p-1 '>
<img className='w-[300px] h-[360px] border-[5px] border-black rounded-tl-[29px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[29px] shadow-2xl shadow-black bg-none animate__animated animate__fadeInUp animate__delay-1s' src={'https://i.ibb.co/WvRMYmM/bl13.jpg'} alt="" />
</aside>

</section>
</SwiperSlide>

{/* <SwiperSlide> <section className='h-[560px] lg:w-[1152px] flex md:flex-row items-center flex-col-reverse md:justify-evenly' style={{backgroundImage:`url(${banner})`, backgroundRepeat:'no-repeat'}}>

<aside id="text-content" className='md:w-[50%] space-y-7'>
    <h1 className="text-[#fcfcff] text-4xl font-bold font-poppins">WE BUILD <br />
        YOUR DREAM HOME </h1>
    <p className='opacity-90 text-white'> we take pride in being the architects of your dreams,
        transforming your vision of a perfect home
        into a tangible reality </p>
        <button className='px-5 py-2 bg-[#1C1C62] text-white font-poppins'>view property</button>
</aside>

<aside>
<img className='w-[300px] h-[360px] border-[5px] border-black rounded-tl-[29px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[29px] shadow-2xl shadow-black bg-none' src={'https://i.ibb.co/sjwVcst/bl14.jpg'} alt="" />
</aside>

</section>
</SwiperSlide>
<SwiperSlide> <section className='h-[560px] lg:w-[1152px] flex md:flex-row items-center flex-col-reverse md:justify-evenly'  style={{backgroundImage:`url(${banner})`, backgroundRepeat:'no-repeat'}}>

<aside id="text-content" className='md:w-[50%] space-y-7'>
    <h1 className="text-[#fcfcff] text-4xl font-bold font-poppins">WE BUILD <br />
        YOUR DREAM HOME </h1>
    <p className='opacity-90 text-white'> we take pride in being the architects of your dreams,
        transforming your vision of a perfect home
        into a tangible reality </p>
        <button className='px-5 py-2 bg-[#1C1C62] text-white font-poppins'>view property</button>
</aside>

<aside>
    <img className='w-[300px] h-[360px] border-[5px] border-black rounded-tl-[29px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[29px] shadow-2xl shadow-black bg-none' src={'https://i.ibb.co/26gxshJ/bl15.jpg'} alt="" />
</aside>

</section>
</SwiperSlide>
         */}


         <SwiperSlide> 
            
    <section className='lg:h-[560px] flex md:flex-row items-center flex-col-reverse md:justify-evenly'  style={{background:'linear-gradient(191deg, rgba(24,52,108,1) 19%, rgba(21,46,76,1) 30%, rgba(121,87,180,1) 97%)'}}>

<aside id="text-content" className='md:w-[50%] space-y-7 p-12 md:p-1 '>
    <h1 className="text-[#fcfcff] text-2xl md:text-4xl font-bold font-poppins">THE BEST <br />
        YOUR DREAM HOME </h1>
    <p className='opacity-90 text-white'> Your dream luxury residence reflects your unique vision, aspirations, and lifestyle preferences, offering a haven of comfort, beauty, and unparalleled luxury tailored to your every desire.</p>
        <button data-aos="fade-right" data-aos-delay='1000' className='px-5 py-2 bg-[#1C1C62] text-white font-poppins animate__animated animate__fadeInLeft animate__delay-1s'>Get Started</button>
</aside>

<aside className='pt-3 md:p-1 '>
<img className='w-[300px] h-[360px] border-[5px] border-black rounded-tl-[29px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[29px] shadow-2xl shadow-black bg-none' src={'https://i.ibb.co/sjwVcst/bl14.jpg'} alt="" />
</aside>

</section>
</SwiperSlide>
<SwiperSlide> <section className='lg:h-[560px]  flex md:flex-row items-center flex-col-reverse md:justify-evenly'   style={{background:'linear-gradient(191deg, rgba(24,52,108,1) 19%, rgba(21,46,76,1) 30%, rgba(121,87,180,1) 97%)'}}>

<aside id="text-content" className='md:w-[50%] space-y-7 p-12 md:p-1'>
    <h1 className="text-[#fcfcff] text-2xl md:text-4xl font-bold font-poppins"> LUXURY <br />
        RESIDENCE YOUR DREAM </h1>
    <p className='opacity-90 text-white'> Luxury residences provide a refined and exclusive living experience for discerning individuals who appreciate the finer things in life and seek the utmost in comfort, convenience, and prestige.</p>
        <button className='px-5 py-2 bg-[#1C1C62] text-white font-poppins animate__animated animate__fadeInLeft animate__delay-1s'>Get Started</button>
</aside>

<aside className='pt-3 md:p-1 '>
    <img className='w-[300px] h-[360px] border-[5px] border-black rounded-tl-[29px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[29px] shadow-2xl shadow-black bg-none' src={'https://i.ibb.co/26gxshJ/bl15.jpg'} alt="" />
</aside>

</section>
</SwiperSlide>
        
</Swiper>
        
        </div>
  
       
    );
};

export default Banner;