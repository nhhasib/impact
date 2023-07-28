import React from 'react';
import img from '../../../../assets/images/Rectangle 3385.png'

const ConferenceCard = () => {
    return (
        <div className='grid grid-cols-3 gap-2 bg-[#F9F9F9] rounded-md p-4 items-center'>
            <div className='flex flex-col col-span-2'>
                <p className='bg-[#F34509] text-white w-[75px] text-right'>2nd May, 2023, 2.30PM</p>
                <img className='pr-10' src={img} alt="" />
                <p className='italic text-[12px]'><code>Business, Tecnology/</code></p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>The Future of Currencies</h1>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                 <br />Read more...</p>
            </div>
        </div>
    );
};

export default ConferenceCard;