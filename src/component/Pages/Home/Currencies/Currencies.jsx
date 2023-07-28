import React from 'react';
import img from "../../../../assets/images/c13874c095a79f257136839e367612ee.jpeg"

const Currencies = () => {
    return (
        <div className='grid grid-cols-2  my-2 '>
            <div>
                <img className='h-[538px]' src={img} alt="" />
            </div>
            <div className='px-[125px] text-white bg-currencies'>
                <h1 className='text-[36px] font-bold'>The Future of Currencies</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
        </div>
    );
};

export default Currencies;