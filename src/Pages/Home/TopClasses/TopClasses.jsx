import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {
    useQuery,
  } from '@tanstack/react-query'
import SingleClass from "../../../Components/SingleClass/SingleClass";


const TopClasses = () => {
    const {data:classes=[]}=useQuery({
        queryKey:['classes'],
        queryFn: async ()=>{
            const res=await fetch('https://art-and-ink-server-side.vercel.app/popularclasses')
            return res.json();
        }
    })
    
    return (
        <div>
            <SectionTitle headingName={"Our Popular Classes"}></SectionTitle>
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
                {
                    classes.map(singleClass=><SingleClass key={singleClass._id} singleClass={singleClass}></SingleClass>)
                }
            </div>
        </div>
    );
};

export default TopClasses;