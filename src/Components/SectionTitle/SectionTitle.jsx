import './SectionTitle.css'

const SectionTitle = ({headingName}) => {
    return (
        <div className='text-center my-14'>
            <h3 className="sectiontitle mx-auto">{headingName}</h3>
            <hr className='w-20 h-4 mx-auto  border-t-4 border-t-[#0a6ab4d0] my-4'/>
            <p className='w-[60%] mx-auto font-serif font-normal text-[16px] text-[#343839]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, delectus. Laboriosam modi voluptatum sunt iste itaque, dolorem illo nisi quisquam, architecto, maiores repudiandae at blanditiis veritatis accusamus!!!!</p>
        </div>
    );
};

export default SectionTitle;