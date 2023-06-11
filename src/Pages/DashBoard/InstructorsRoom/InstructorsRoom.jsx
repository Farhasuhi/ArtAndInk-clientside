import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Marquee from "react-fast-marquee";


const InstructorsRoom = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className='text-4xl'>
                <Marquee pauseOnHover={true}>
                    <h1>Welcome {user.displayName} in Art&Ink world,</h1>
                </Marquee>
            </div>
        </div>
    );
};

export default InstructorsRoom;