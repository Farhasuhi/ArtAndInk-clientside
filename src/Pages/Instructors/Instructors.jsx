import React from 'react';
import Cover from '../../Components/Cover/Cover';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import AllInstructors from '../../Components/AllInstructors/AllInstructors';

const Instructors = () => {
    const { data: allinstructors= [], refetch } = useQuery({
        queryKey: ['allinstructors'],
        queryFn: async () => {
            const res = await fetch('https://art-and-ink-server-side.vercel.app/allinstructors')
            return res.json();
        }
    })
    return (
        <div>
            <Cover>
                <h1 className="text-2xl lg:text-7xl font-bold"><span className="text-amber-400">H</span>ome <span className="text-cyan-600">/</span><span className="text-purple-500"> I</span>nstructors</h1>
            </Cover>
            <SectionTitle headingName={'Instructors'}></SectionTitle>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
                {allinstructors.map(instructor=><AllInstructors key={instructor._id} instructor={instructor}></AllInstructors>)}
            </div>
        </div>
    );
};

export default Instructors;