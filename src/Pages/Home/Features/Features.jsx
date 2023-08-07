import React from 'react';
import { PiBookBookmarkDuotone } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import { BiBookReader } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Features = () => {
    return (
        <div className='md:flex items-center text-white mb-[100px]' data-aos="fade-up"
        data-aos-anchor-placement="top-center" data-aos-duration="2000">
            <div className='bg-[#60CD96] px-4 py-10 flex flex-col gap-2'>
                <span className='text-7xl'><PiBookBookmarkDuotone></PiBookBookmarkDuotone></span>
                <h5 className='text-2xl'>Special Education</h5>
                <p className=''>Our Special Education Program offers quality  education to children with disabilities and developmental delays.</p>
            </div>
            <div className='bg-[#69D2E7] px-4 py-10 flex flex-col gap-2'>
                <span className='text-7xl text-white'><GoSun></GoSun></span>
                <h5 className='text-2xl'>Full Day Session</h5>
                <p className=''>At Kinderex, we offer full-day preschool sessions built on a play-based approach for kids ages two to five.</p>
            </div>
            <div className='bg-[#F98F6F] px-4 py-10 flex flex-col gap-2'>
                <span className='text-7xl'><BiBookReader></BiBookReader></span>
                <h5 className='text-2xl'>Qualified Teachers</h5>
                <p className=''>Our team consists of experienced and creative teachers who are dedicated to your kids’ successful education.</p>
            </div>
            <div className='bg-[#9D87C3] px-4 py-6 flex flex-col gap-2'>
                <span className='text-7xl'><FaSchool></FaSchool></span>
                <h5 className='text-2xl'>The Best Preschool</h5>
                <p>Providing Quality Education in a Creative Environment</p>
                <button className="btn btn-outline  border-white w-[250px] text-white">Learn More</button>
            </div>
        </div>
    );
};

export default Features;