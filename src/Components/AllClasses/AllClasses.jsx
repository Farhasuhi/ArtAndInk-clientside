import React, { useContext } from 'react';
import { Parallax } from 'react-parallax';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const AllClasses = ({ item, addToSelect ,disabled}) => {
    const { class_name, instructor_name, image, price, available_seats
    } = item
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [isAdmin]=useAdmin();
    const[isInstructor]=useInstructor();
    return (
        <div>
            <div className=''>
                <div className="card  card-compact w-full bg-base-100 shadow-xl singleClass">
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
                                        <button className="btn bg-warning" onClick={() => addToSelect(item)} disabled={available_seats===0|| isAdmin||isInstructor}>Add to select</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>

        </div>
    );
};

export default AllClasses;