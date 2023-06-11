
import { Parallax } from 'react-parallax';
import './SingleClass.css'


const SingleClass = (props) => {
    const { singleClass } = props;
    const { class_name, instructor_name, image, price, available_seats
    } = singleClass
    return (
        <div className=''>
            <div className="card  card-compact w-full bg-base-100 shadow-xl singleClass">
                {/* <img className="h-[300px] w-full" src={image} alt="Classes" /> */}
                <Parallax blur={{ min: -50, max: 50 }}
                    bgImage={image}
                    bgImageAlt="the menu"
                    strength={-200} className="h-[300px] w-full" >
                    <div className="card-body single-class-body">
                        <div className="content pt-10 class-title ">
                            <h2 className="card-title ">Class Name:{class_name}</h2>
                            <div className='intro space-y-2 mt-2'>
                                <p>Instructor Name:{instructor_name}</p>
                                <p>Session Fee:${price}</p>
                                <p>Available seats:{available_seats}</p>
                                <div className="card-actions justify-end pt-5">
                                    <button className="btn bg-warning">View details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    );
};

export default SingleClass;