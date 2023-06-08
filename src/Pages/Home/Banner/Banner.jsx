import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/banner-1.jpg'
import img7 from '../../../assets/banner/banner-7.avif'
import img9 from '../../../assets/banner/banner-9.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div className="relative text-center w-full">
            <Carousel showArrows={true} >
                <div className=" w-full">
                    <img src={img1} className="w-full rounded-xl"/>
                    <div className="lg:space-y-8 text-justify flex flex-col justify-start pt-[80px] lg:pt-[250px] items-center  absolute h-full w-full left-0 top-0  bg-black bg-opacity-60 rounded-xl text-white">
                        <h1 className="text-2xl lg:text-7xl font-bold"><span className="text-amber-400">N</span>ew <span className="text-cyan-600">C</span>amping <span className="text-purple-500">S</span>eason</h1>
                        <h1 className="text-2xl lg:text-7xl font-bold"><span className=" text-lime-600">S</span>tarting <span className="text-fuchsia-500">I</span>n <span className=" text-red-400">A</span>ugust <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500">!</span><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2835aa69] to-cyan-500">!</span><span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">!</span></h1>
                        <p className=" text-justify lg:w-[50%] mx-auto text-[#E0E4E1] font-normal pt-5 hidden lg:block">Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.</p>
                        <div className="pl-[100px] lg:pl-[300px] pt-5">
                            <button className="px-3 lg:px-8 py-2 lg:py-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl font-semibold lg:text-xl">Enroll Now</button>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <img src={img7} className="w-full rounded-xl"/>
                    <div className="lg:space-y-8 text-justify  absolute h-full w-full left-0 top-0  rounded-xl flex flex-col justify-center items-center bg-black bg-opacity-60 text-white pt-[80px] lg:pt-[250px]">
                    <h1 className="text-2xl lg:text-7xl font-bold"><span className="text-amber-400">N</span>ew <span className="text-cyan-600">C</span>amping <span className="text-purple-500">S</span>eason</h1>
                        <h1 className="text-2xl lg:text-7xl font-bold"><span className=" text-lime-600">S</span>tarting <span className="text-fuchsia-500">I</span>n <span className=" text-red-400">A</span>ugust <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500">!</span><span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2835aa69] to-cyan-500">!</span><span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">!</span></h1>
                        <p className=" text-justify lg:w-[50%] mx-auto text-[#E0E4E1] font-normal pt-5 hidden lg:block">Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.</p>
                        <div className="pl-[100px] lg:pl-[300px] pt-5">
                            <button className="px-3 lg:px-8 py-2 lg:py-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl font-semibold lg:text-xl">Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img src={img9}  className="w-full rounded-xl"/>
                    <div className="lg:space-y-8 text-justify  absolute h-full w-full  left-0 top-0  rounded-xl flex flex-col justify-center items-center bg-black bg-opacity-60 text-white pt-[80px] lg:pt-[250px]">
                    <h1 className="text-2xl lg:text-7xl font-bold"><span className="text-amber-400">N</span>ew <span className="text-cyan-600">C</span>amping <span className="text-purple-500">S</span>eason</h1>
                        <h1 className="text-2xl lg:text-7xl font-bold"><span className=" text-lime-600">S</span>tarting <span className="text-fuchsia-500">I</span>n <span className=" text-red-400">A</span>ugust <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500">!</span><span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2835aa69] to-cyan-500">!</span><span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">!</span></h1>
                        <p className=" text-justify lg:w-[50%] mx-auto text-[#E0E4E1] font-normal pt-5 hidden lg:block">Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled catalyst applications.</p>
                        <div className="pl-[100px] lg:pl-[300px] pt-5">
                            <button className="px-3 lg:px-8 py-2 lg:py-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl font-semibold lg:text-xl">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;