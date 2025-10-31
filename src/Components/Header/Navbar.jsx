import React from 'react';
import logo from '../../assets/fi_16340199.png';

const Navbar = () => {
    return (
        <section className=' bg-[#EFEFEF]'>
            <div className='max-w-[1268px] mx-auto flex items-center gap-2 py-5 justify-between'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='mr-4' />
                    <h3 className='text-3xl font-extrabold'>Phudu</h3>
                </div>
                <div>
                    <ul className='flex gap-12'>
                        <li className='text-[18px] text-[#0F0F0F]'>Home</li>
                        <li className='text-[18px] text-[#0F0F0F]'>My-Bookings</li>
                        <li className='text-[18px] text-[#0F0F0F]'>Blogs</li>
                        <li className='text-[18px] text-[#0F0F0F]'>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <button className='text-[20px] text-amber-50 px-[30px] py-2.5 bg-[#176AE5] rounded-4xl'>Emergency</button>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
