import React from 'react';
import phudu from '../../assets/fi_16340199.png'
import facebook from '../../assets/social/Group 1171275145.png'
import linkedIn from '../../assets/social/Group 1171275148.png'
import twitter from '../../assets/social/twitter-logo-2 3.png'
import youtube from '../../assets/social/Group 1171275149.png'
import { Link } from 'react-router';

const Footer = () => {
    const links = <>
        <Link to='/'><li className='text-[18px] text-[#0F0F0F]'>Home</li></Link>
        <Link to='/bookings'><li className='text-[18px] text-[#0F0F0F]'>My-Bookings</li></Link>
        <Link to='/readList'><li className='text-[18px] text-[#0F0F0F]'>Blogs</li></Link>
        <Link to='/readList'><li className='text-[18px] text-[#0F0F0F]'>Contact Us</li></Link>
    </>
    return (
        <section className='max-w-[1268px] mx-auto py-[100px]'>
            <div className='flex items-center justify-center mb-[32px]'>
                <img src={phudu} alt="logo" className='mr-4' />
                <h3 className='text-3xl font-extrabold'>Phudu</h3>
            </div>
            <div className='mb-8'>
                <ul className='flex gap-12 justify-center'>
                    {
                        links
                    }
                </ul>
            </div>
            <hr className='text-[#EFEFEF] mb-8' />

            <div className='flex justify-center gap-6'>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={linkedIn} alt="" />
                <img src={youtube} alt="" />
            </div>
        </section>
    );
};

export default Footer;