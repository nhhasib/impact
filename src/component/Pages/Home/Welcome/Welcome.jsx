import React from 'react';

const Welcome = () => {
    return (
            <div className='text-white bg-welcome'>
            <div className='w-4/5 mx-auto text-center'>
            <h1 className='text-[36px]'>Welcome</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                <div className='flex justify-center gap-5 mt-7'>
                <div className='flex flex-col gap-6 items-center'>
                    <img className='w-[86px] h-[86px]' src="/src/assets/images/BUET_LOGO.png" alt="" />
                    <button className='btn-wlcm'>Organized by : BUET</button>
                </div>
                <div className='flex flex-col gap-6 items-center'>
                    <img src="/src/assets/images/download (1) 1.png" alt="" />
                    <button className='btn-wlcm'>Hosted by : IESD</button>
                </div>
                </div>
               </div>
            </div>
     
    );
};

export default Welcome;