import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import {
    useQuery,
  } from '@tanstack/react-query'
import SingleInstructor from '../../../Components/SingleInstructor/SingleInstructor';

const InstructionClass = () => {
    const {data:instructors=[]}=useQuery({
        queryKey:['instructors'],
        queryFn: async ()=>{
            const res=await fetch('https://art-and-ink-server-side.vercel.app/popularinstructors')
            return res.json();
        }
    })
    return (
        <div>
            <SectionTitle headingName={'Our Popular Instructors'}></SectionTitle>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
                {instructors.map(instructor=><SingleInstructor key={instructor._id} instructor={instructor}></SingleInstructor>)}
            </div>
        </div>
    );
};

export default InstructionClass;