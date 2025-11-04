import React from 'react';
import logo from '../../assets/fi_16340199.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
    <NavLink to='/' className={({isActive}) => (isActive ? 'bg-[#e8f0fd] text-[#176AE5] border px-2 rounded-2xl font-semibold' : '')}><li className='text-[18px]'>Home</li></NavLink>
    <NavLink to='/bookings' className={({isActive}) => (isActive ? 'bg-[#e8f0fd] text-[#176AE5] border px-2 rounded-2xl font-semibold' : '')}><li className='text-[18px] '>My-Bookings</li></NavLink>

    <NavLink to='/blogs' className={({isActive}) => (isActive ? 'bg-[#e8f0fd] text-[#176AE5] border px-2 rounded-2xl font-semibold' : '')}><li className='text-[18px] '>Blogs</li></NavLink>
    <NavLink to='/contractUs' className={({isActive}) => (isActive ? 'bg-[#e8f0fd] text-[#176AE5] border px-2 rounded-2xl font-semibold' : '')}><li className='text-[18px]'>Contact Us</li></NavLink>
    </>
    return (
        <section className=' bg-[#EFEFEF]'>
            <div className='max-w-[1268px] mx-auto flex items-center gap-2 py-5 justify-between'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='mr-4' />
                    <h3 className='text-3xl font-extrabold'>Phudu</h3>
                </div>
                <div>
                    <ul className='flex gap-12'>
                        {
                            links
                        }
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
