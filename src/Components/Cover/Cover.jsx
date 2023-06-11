import React from 'react';
import img1 from '../../assets/banner/banner-1.jpg'

const Cover = ({children}) => {
    return (
        <div className='relative text-center w-full'>
            <div className=" w-full">
                <img src={img1} className="w-full h-[400px] rounded-xl object-cover" />
                <div className="flex flex-col justify-start pt-[30px] lg:pt-[180px] items-center  absolute h-[400px] w-full left-0 top-0  bg-black bg-opacity-60 rounded-xl text-white">
                   {children} 
                </div>
            </div>
        </div>
    );
};

export default Cover;