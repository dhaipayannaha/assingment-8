import React from 'react';
import BannerImage from '../../assets/Frame 2087325956.png'

const Banner = () => {
    return (
        <section className='bg-[#EFEFEF]'>
            <div className='max-w-[1500px] mx-auto bg-gradient-to-t from-white to-[#EFEFEF] rounded-3xl border-2 border-white py-16'>
                <h1 className='text-center text-[#0F0F0F] text-[48px] font-extrabold mb-4'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <h1 className='text-center text-[#0F0F0F] text-[16px] font-medium mb-6'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</h1>

                <div className='flex justify-center mb-6'>
                    <input className='border-2 border-gray-300 rounded-4xl w-[600px] h-[52px] pl-[18px] text-[14px] mr-4' type="text" placeholder='Search any doctor...' />

                    <button className='text-[20px] px-[30px] py-[13.5px] bg-[#176AE5] rounded-4xl text-white font-bold'>Search Now</button>
                </div>
                
                <div className='flex justify-center gap-6'>
                    <img src={BannerImage} alt="" />
                <img src={BannerImage} alt="" />
                </div>
            </div>


        </section>
    );
};

export default Banner;