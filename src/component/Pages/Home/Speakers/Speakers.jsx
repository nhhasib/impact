import React from 'react';
import SpeakersCard from './SpeakersCard';
import img1 from '../../../../assets/images/Ellipse 325.png'
import img2 from '../../../../assets/images/Ellipse 325 (1).png'

const Speakers = () => {
    return (
        <div className='bg-speakers text-white py-20'>
            <div className='text-center py-20 w-1/2 mx-auto'>
            <h1 className='text-[36px] font-bold'>Meet Our Fantastic Speakers</h1>
            <p>
            We seek the best speakers from around the world and let them shape the agenda — they're the experts after all.
            </p>
            </div>
            <div className='w-4/5 mx-auto'>
            <div className='flex gap-1 my-10 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">
  <path opacity="0.5" d="M13.4255 3H8.82979L5 13.7763H8.82979L5.76596 24L14 10.4605H10.1702L13.4255 3Z" fill="#BD7424"/>
  <g filter="url(#filter0_d_1_5973)">
    <path d="M12.4255 0H7.82979L4 10.7763H7.82979L4.76596 21L13 7.46053H9.17021L12.4255 0Z" fill="#EB9231"/>
  </g>
  <defs>
    <filter id="filter0_d_1_5973" x="0" y="0" width="17" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5973"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5973" result="shape"/>
    </filter>
  </defs>
                </svg>
                <span className='font-bold text-[28px]'>Chief Patron</span>
                </div>
                <div className='grid grid-cols-3 gap-[60px]'>
                    <SpeakersCard img={img1}></SpeakersCard>
                    <SpeakersCard img={img2}></SpeakersCard>
                    <SpeakersCard img={img2}></SpeakersCard>
                    <SpeakersCard img={img1}></SpeakersCard>
                    <SpeakersCard img={img2}></SpeakersCard>
                    <SpeakersCard img={img2}></SpeakersCard>
                    <SpeakersCard img={img1}></SpeakersCard>
                    <SpeakersCard img={img2}></SpeakersCard>
                </div>
           </div>
            <div className='w-4/5 mx-auto'>
            <div className='flex gap-1 my-10 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">
  <path opacity="0.5" d="M13.4255 3H8.82979L5 13.7763H8.82979L5.76596 24L14 10.4605H10.1702L13.4255 3Z" fill="#BD7424"/>
  <g filter="url(#filter0_d_1_5973)">
    <path d="M12.4255 0H7.82979L4 10.7763H7.82979L4.76596 21L13 7.46053H9.17021L12.4255 0Z" fill="#EB9231"/>
  </g>
  <defs>
    <filter id="filter0_d_1_5973" x="0" y="0" width="17" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5973"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5973" result="shape"/>
    </filter>
  </defs>
                </svg>
                <span className='font-bold text-[28px]'>Patron</span>
                </div>
                <div className='grid grid-cols-3 gap-[60px]'>
                    <SpeakersCard img={img1}></SpeakersCard>
                    <SpeakersCard img={img2}></SpeakersCard>
                </div>
            </div>
            <div className='w-4/5 mx-auto'>
            <div className='flex gap-1 my-10 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">
  <path opacity="0.5" d="M13.4255 3H8.82979L5 13.7763H8.82979L5.76596 24L14 10.4605H10.1702L13.4255 3Z" fill="#BD7424"/>
  <g filter="url(#filter0_d_1_5973)">
    <path d="M12.4255 0H7.82979L4 10.7763H7.82979L4.76596 21L13 7.46053H9.17021L12.4255 0Z" fill="#EB9231"/>
  </g>
  <defs>
    <filter id="filter0_d_1_5973" x="0" y="0" width="17" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5973"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5973" result="shape"/>
    </filter>
  </defs>
                </svg>
                <span className='font-bold text-[28px]'>Conference Chair</span>
                </div>
                <div className='grid grid-cols-3 gap-[60px]'>
                    <SpeakersCard img={img1}></SpeakersCard>
                    <SpeakersCard img={img2}></SpeakersCard>
                </div>
            </div>
            <div className='w-4/5 mx-auto'>
            <div className='flex gap-1 my-10 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">
  <path opacity="0.5" d="M13.4255 3H8.82979L5 13.7763H8.82979L5.76596 24L14 10.4605H10.1702L13.4255 3Z" fill="#BD7424"/>
  <g filter="url(#filter0_d_1_5973)">
    <path d="M12.4255 0H7.82979L4 10.7763H7.82979L4.76596 21L13 7.46053H9.17021L12.4255 0Z" fill="#EB9231"/>
  </g>
  <defs>
    <filter id="filter0_d_1_5973" x="0" y="0" width="17" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5973"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5973" result="shape"/>
    </filter>
  </defs>
                </svg>
                <span className='font-bold text-[28px]'>Conference Secretary</span>
                </div>
                <div className='grid grid-cols-3 gap-[60px]'>
                    <SpeakersCard img={img1}></SpeakersCard>
                    <SpeakersCard img={img2}></SpeakersCard>
                </div>
           </div>
            <div className='w-4/5 mx-auto'>
            <div className='flex gap-1 my-10 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="29" viewBox="0 0 17 29" fill="none">
  <path opacity="0.5" d="M13.4255 3H8.82979L5 13.7763H8.82979L5.76596 24L14 10.4605H10.1702L13.4255 3Z" fill="#BD7424"/>
  <g filter="url(#filter0_d_1_5973)">
    <path d="M12.4255 0H7.82979L4 10.7763H7.82979L4.76596 21L13 7.46053H9.17021L12.4255 0Z" fill="#EB9231"/>
  </g>
  <defs>
    <filter id="filter0_d_1_5973" x="0" y="0" width="17" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5973"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5973" result="shape"/>
    </filter>
  </defs>
                </svg>
                <span className='font-bold text-[28px]'>Advisory Panel</span>
                </div>
                <div className='grid grid-cols-3 gap-[60px]'> 
                    <SpeakersCard img={img2}></SpeakersCard>
                </div>
           </div>
        </div>
    );
};

export default Speakers;