import { Helmet } from 'react-helmet-async';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation,Autoplay } from 'swiper/modules';
// import banner from '../../assets/Shiny Overlay.svg'
import banner from '../../assets/Shiny Overlay.jpg'
import bannerImg from '../../assets/bannerImg.png'
const Banner = () => {

    return (

        <div className='h-[560px] lg:w-[1152px] mt-8'>  
        
        <Swiper
               autoplay={{delay:2000,disableOnInteraction: false}}
               loop={true}
               slidesPerView={1}
               spaceBetween={30}
               keyboard={{
                 enabled: true,
               }}
               pagination={{
                 clickable: true,
               }}
               navigation={true}
               modules={[Keyboard, Autoplay,Pagination, Navigation]}
        >
<SwiperSlide> 

<section  data-aos="fade-up-right" data-aos-duration='2000' className='h-[560px] lg:w-[1152px] flex items-center  flex-col-reverse md:flex-row md:justify-evenly' style={{backgroundImage:`url(${banner})`, backgroundRepeat:'no-repeat'}}>

<aside id="text-content" className='lg:w-[50%] space-y-3'>
    <h1 className="text-[#fcfcff] text-3xl font-poppins">WE BUILD <br />
        YOUR DREAM HOME </h1>
    <p className='opacity-90 text-white'> we take pride in being the architects of your dreams,
        transforming your vision of a perfect home
        into a tangible reality </p>
        <button className='px-5 py-2 bg-[#1C1C62] text-white font-poppins'>view property</button>
</aside>

<aside>
    <img className='w-full shadow-2xl shadow-black bg-none' src={bannerImg} alt="" />
</aside>

</section>
</SwiperSlide>

<SwiperSlide> <section className='h-[560px] lg:w-[1152px] flex md:flex-row items-center flex-col-reverse md:justify-evenly' style={{backgroundImage:`url(${banner})`, backgroundRepeat:'no-repeat'}}>

<aside id="text-content" className='md:w-[50%]'>
    <h1 className="text-[#fcfcff] text-3xl font-poppins">WE BUILD <br />
        YOUR DREAM HOME </h1>
    <p className='opacity-90 text-white'> we take pride in being the architects of your dreams,
        transforming your vision of a perfect home
        into a tangible reality </p>
        <button className='px-5 py-2 bg-[#1C1C62] text-white font-poppins'>view property</button>
</aside>

<aside>
    <img className='w-full shadow-2xl shadow-black bg-none' src={bannerImg} alt="" />
</aside>

</section>
</SwiperSlide>
<SwiperSlide> <section className='h-[560px] lg:w-[1152px] flex md:flex-row items-center flex-col-reverse md:justify-evenly'  style={{backgroundImage:`url(${banner})`, backgroundRepeat:'no-repeat'}}>

<aside id="text-content" className='md:w-[50%]'>
    <h1 className="text-[#fcfcff] text-3xl font-poppins">WE BUILD <br />
        YOUR DREAM HOME </h1>
    <p className='opacity-90 text-white'> we take pride in being the architects of your dreams,
        transforming your vision of a perfect home
        into a tangible reality </p>
        <button className='px-5 py-2 bg-[#1C1C62] text-white font-poppins'>view property</button>
</aside>

<aside>
    <img className='w-[300px] h-[360px] border-[5px] border-black rounded-tl-[29px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[29px] shadow-2xl shadow-black bg-none' src={'https://i.ibb.co/WvRMYmM/bl13.jpg'} alt="" />
</aside>

</section>
</SwiperSlide>
        
</Swiper>
        
        </div>
  
       
    );
};

export default Banner;