import React from 'react';
import first from '../../assets/fi_15536380.png'
import second from '../../assets/fi_7804340.png'
import third from '../../assets/fi_2854545.png'
import fourth from '../../assets/fi_3160069.png'
import CountUp from 'react-countup';

const Rating = () => {
    return (
        <section className='bg-[#EFEFEF] pb-20'>
            <div className='max-w-[1268px] mx-auto'>
                <h2 className='text-center text-[40px] font-extrabold'>We Provide Best Medical Services</h2>
                <p className='text-[#0F0F0F] text-center mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>

                <div className='grid grid-cols-4 gap-6'>
                    <div className='py-10 px-12 bg-white rounded-2xl '>
                        <img src={first} alt="" />
                        <p className='text-[64px] font-extrabold text-[#0F0F0F]'>
                        <CountUp  delay={2} end={199} />+
                       </p>
                        <p className='text-[#b3b3b3]'>Total Doctors</p>
                    </div>
                    <div className='py-10 px-12 bg-white rounded-2xl '>
                        <img src={second} alt="" />
                        <p className='text-[64px] font-extrabold text-[#0F0F0F]'>
                        <CountUp  delay={2} end={457} />+
                       </p>
                        <p className='text-[#b3b3b3]'>Total Reviews</p>
                    </div>
                    <div className='py-10 px-12 bg-white rounded-2xl '>
                        <img src={third} alt="" />
                        <p className='text-[64px] font-extrabold text-[#0F0F0F]'>
                        <CountUp  delay={2} end={1900} />+
                       </p>
                        <p className='text-[#b3b3b3]'>Patients</p>
                    </div>
                    <div className='py-10 px-12 bg-white rounded-2xl '>
                        <img src={fourth} alt="" />
                        
                       <p className='text-[64px] font-extrabold text-[#0F0F0F]'>
                        <CountUp  delay={2} end={100} />+
                       </p>
                        <p className='text-[#b3b3b3]'>Total Stuff's</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rating;