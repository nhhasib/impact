import React from 'react';
import ConferenceCard from './ConferenceCard';


const Conference = () => {
    return (
        <div>
            <div className='my-20 text-center'>
            <h1 className='text-[36px] font-bold'>Conference Update</h1>
                <p>The latest thinking, ideas and opinions on digital product from the ENCON23 team and community.</p>
            </div>
            <div className='w-4/5 mx-auto grid grid-cols-2 gap-4'>
            <ConferenceCard></ConferenceCard>
            <ConferenceCard></ConferenceCard>
            <ConferenceCard></ConferenceCard>
            <ConferenceCard></ConferenceCard>
            </div>
            <div className='text-center my-10'>
            <button className='btn-common'>All Blogs</button>
            </div>
        </div>
    );
};

export default Conference;