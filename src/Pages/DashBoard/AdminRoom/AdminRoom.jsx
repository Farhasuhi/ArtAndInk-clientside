import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Marquee from 'react-fast-marquee';

const AdminRoom = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div>
            <div className='text-4xl'>
                <Marquee pauseOnHover={true}>
                    <h1>Welcome {user.displayName} in Art&Ink world,</h1>
                </Marquee>
            </div>
        </div>
        </div>
    );
};

export default AdminRoom;