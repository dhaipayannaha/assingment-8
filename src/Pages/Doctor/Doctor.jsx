import React from 'react';
import justCheck from '../../assets/Frame 2087325956.png'
import R from '../../assets/fi_9394452.png'

const Doctor = ({doctor}) => {
    console.log(doctor)

    const {id, education, experience_years, image, name, registration_number} = doctor


    return (
        <div className='bg-white p-8 rounded-2xl'>
            <img className='w-[347px] h-[248px] rounded-2xl mb-4' src={image} alt="" />
            <div className='flex mb-4'>
                <p className='text-[14px] font-medium px-3.5 py-[7px] border-1 border-[#0a9b31] text-[#09982F] bg-[#e7feed] rounded-4xl mr-4'>Available</p>
                <p className='text-[14px] font-medium px-3.5 py-[7px] border-1 border-[#176AE5] text-[#176AE5] bg-[#e8f0fd] rounded-4xl'>{experience_years} Years Experience</p>
            </div>
            <h2 className='text-[#0F0F0F] text-[24px] font-extrabold mb-3'>{name}</h2>
            <h3  className='text-[#b3b3b3] text-[18px] font-medium mb-4'>{education}</h3>
            <p className='text-[#b3b3b3]  mb-4'>-----------------------------------------------------</p>

            <div className='flex items-center gap-3 mb-4'>
                <img src={R} alt="" />
            <p className='text-[#737373]'>{registration_number}</p>
            </div>

            <button className='text-[14px] font-medium px-3.5 py-[7px] border-1 border-[#176AE5] text-[#176AE5] rounded-4xl w-[347px]'>View Details</button>
        </div>
        
    );
};

export default Doctor;