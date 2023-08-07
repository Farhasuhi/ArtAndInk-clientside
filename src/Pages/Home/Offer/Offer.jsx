import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import backImage from './../../../assets/Untitled__2_-removebg-preview.png';
import { LuShield ,LuBaby} from "react-icons/lu";
import { SiGoogleclassroom } from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import { MdOutlineColorLens } from "react-icons/md";
import { GoSun } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Offer = () => {
    return (
        <div className='my-40' data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" data-aos-duration="2000">
            <SectionTitle headingName={"What We Offer"}></SectionTitle>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-16 '>
                <div className='relative flex flex-col justify-center items-center gap-3'>
                    <img className='w-[100px]' src={backImage} alt="" />
                    <div className='absolute text-6xl top-[20px] left-30 '>
                        <span className='text-[#64CE98]'><LuShield></LuShield></span>
                    </div>
                    <h1 className='text-2xl font-semibold'>Safety First</h1>
                    <p className='text-[#8A8FA5]'>We offer first-class protection and security <br /> for your children at Kinderex.</p>
                </div>
                <div className='relative flex flex-col justify-center items-center gap-3'>
                    <img className='w-[100px]' src={backImage} alt="" />
                    <div className='absolute text-6xl top-[20px] left-30 '>
                        <span className='text-[#64CE98]'><SiGoogleclassroom></SiGoogleclassroom></span>
                    </div>
                    <h1 className='text-2xl font-semibold'>Small Class Size</h1>
                    <p className='text-[#8A8FA5]'>All classes at our center have up to 6 students regardless of the curriculum.</p>
                </div>
                <div className='relative flex flex-col justify-center items-center gap-3'>
                    <img className='w-[100px]' src={backImage} alt="" />
                    <div className='absolute text-6xl top-[20px] left-30 '>
                        <span className='text-[#64CE98]'><PiCertificateBold></PiCertificateBold></span>
                    </div>
                    <h1 className='text-2xl font-semibold'>Certified Teachers</h1>
                    <p className='text-[#8A8FA5]'>We hire only the most experienced and certified teachers for your children.</p>
                </div>
                <div className='relative flex flex-col justify-center items-center gap-3'>
                    <img className='w-[100px]' src={backImage} alt="" />
                    <div className='absolute text-6xl top-[20px] left-30 '>
                        <span className='text-[#64CE98]'><LuBaby></LuBaby></span>
                    </div>
                    <h1 className='text-2xl font-semibold'>Infant Care</h1>
                    <p className='text-[#8A8FA5]'>Meeting the educational needs of infants through quality infant care.</p>
                </div>
                <div className='relative flex flex-col justify-center items-center gap-3'>
                    <img className='w-[100px]' src={backImage} alt="" />
                    <div className='absolute text-6xl top-[20px] left-30 '>
                        <span className='text-[#64CE98]'><MdOutlineColorLens></MdOutlineColorLens></span>
                    </div>
                    <h1 className='text-2xl font-semibold'>Creative Lessons</h1>
                    <p className='text-[#8A8FA5]'>Our curriculum was designed to nurture creativity in all students of Kinderex.</p>
                </div>
                <div className='relative flex flex-col justify-center items-center gap-3'>
                    <img className='w-[100px]' src={backImage} alt="" />
                    <div className='absolute text-6xl top-[20px] left-30 '>
                        <span className='text-[#64CE98]'><GoSun></GoSun></span>
                    </div>
                    <h1 className='text-2xl font-semibold'>Happy Environment</h1>
                    <p className='text-[#8A8FA5]'>The best conditions for your child to have the unique learning experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Offer;