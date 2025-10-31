import React from 'react';

const Banner = () => {
    return (
        <section className='bg-[#EFEFEF]'>
            <div className='max-w-[1500px] mx-auto bg-gradient-to-t from-white to-[#EFEFEF] rounded-3xl border-2 border-white'>
                <h1 className='text-center text-[#0F0F0F] text-[48px] font-extrabold'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <h1 className='text-center text-[#0F0F0F] text-[16px] font-medium'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</h1>

                <div className='flex justify-center'>
                    <input className='border-2 border-gray-400 rounded-4xl w-[600px] h-[52px]' type="text" />

                <button>Search Now</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;