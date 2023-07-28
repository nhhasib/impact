import React from 'react';
import img1 from '../../../../assets/images/Rectangle 3385.png'
import img2 from '../../../../assets/images/Rectangle 3385 (1).png'
import img3  from '../../../../assets/images/Rectangle 3385 (1).png'
import EventCard from './EventCard';

const Events = () => {
    return (
        <div>
            <div className='w-1/2 mx-auto text-center my-20'>
            <h1 className='text-[36px] font-bold'>Our Events</h1>
            <p>Since 2010, we’ve been welcoming product people to join us in Dhaka, Bangladesh for a day of insights and stories from some of the brightest minds in digital product</p>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                <div className='bg-card1'>
                <EventCard ></EventCard>
               </div>
                <div className='bg-card2'>
                <EventCard ></EventCard>
                </div>
                <div className='bg-card1'>
                <EventCard></EventCard>
                </div>
                <div className='bg-card4'>
                <EventCard ></EventCard>
                </div>
            </div>
        </div>
    );
};

export default Events;