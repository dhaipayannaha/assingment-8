import React from 'react';

const Appointment = ({ app }) => {
    const { name, education, fee } = app;
    return (
        <div className='max-w-[1268px] mx-auto bg-white rounded-2xl p-8 mb-8'>
            <div className='flex items-center justify-between mb-4'>
                <div>
                    <h3 className='text-[20px] font-bold mb-3'>{name}</h3>
                    <h3 className='text-[18px] font-medium text-gray-500'>{education}</h3>
                </div>
                <div>
                    <h3 className='text-[18px] font-medium text-gray-500'>Appointment Fee: {fee} Taka + Vat</h3>
                </div>
            </div>
            <p className='text-center text-gray-500 pb-4'>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            <p className='text-[#FF0000] text-[20px] font-semibold border rounded-4xl text-center py-3'>Cancle Appointment</p>
        </div>
    );
};

export default Appointment;