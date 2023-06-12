import React from 'react';

const ArtsandCraftsTrainning = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full lg:flex-row gap-16">
                <img src="https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0cyUyMGFuZCUyMGNyYWZ0fGVufDB8fDB8fHww&w=1000&q=80" className="w-full lg:w-[600px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-medium">International Based Learning!</h1>
                    <h1 className="text-5xl font-bold text-semibold text-purple-900">Arts and Crafts Training!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-purple-900 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ArtsandCraftsTrainning;