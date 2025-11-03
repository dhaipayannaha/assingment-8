import React from 'react';
import logo from '../../assets/fi_16340199.png';
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
    <Link to='/'><li className='text-[18px] text-[#0F0F0F]'>Home</li></Link>
    <Link to='/bookings'><li className='text-[18px] text-[#0F0F0F]'>My-Bookings</li></Link>
    <Link to='/readList'><li className='text-[18px] text-[#0F0F0F]'>Blogs</li></Link>
    <Link to='/readList'><li className='text-[18px] text-[#0F0F0F]'>Contact Us</li></Link>
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
