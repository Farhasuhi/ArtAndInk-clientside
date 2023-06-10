import React from 'react';
import './SingleInstructors.css'

const SingleInstructor = ({ instructor }) => {
    console.log(instructor)
    const { name, email, image, number_of_classes_taken, classes_taken } = instructor;
   
    return (
        <div>
            <div className='ui-card w-[350px] rounded-3xl'>
                <img className="lg:w-[500px] lg:h-[600px] rounded-full" src={image} alt="" />
                <div className="content description space-y-3">
                    <h2 className="card-title ">Instructor Name:{name}</h2>
                    <p>Email:{email}</p>
                    <p>Number Of Classes Taken:{number_of_classes_taken}</p>
                    <p>Classes:
                        {classes_taken.join(',')}
                    </p>
                    <div className="card-actions justify-center pt-5">
                        <button className="btn bg-warning">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;