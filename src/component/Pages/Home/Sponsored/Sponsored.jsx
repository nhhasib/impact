import React from 'react';
import logo1 from '../../../../assets/images/logo-oracle.png'
import logo2 from '../../../../assets/images/logo-tip.png'
import logo3 from '../../../../assets/images/logo-cross.png'
import logo4 from '../../../../assets/images/Becker_Logo_RGB_BECKER-white.png'

const Sponsored = () => {
    return (
        <div className='bg-[#172C27] text-white py-16'>
            <h1 className='text-[36px] font-bold text-center'>Sponsored By</h1>
            <div className='grid grid-cols-4 items-center gap-48 w-4/5 mx-auto pt-16'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </div>
            </div>
    );
};

export default Sponsored;