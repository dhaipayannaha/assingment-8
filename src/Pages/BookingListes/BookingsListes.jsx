import React from 'react';
import Appointment from '../appointment/appointment';

const BookingsListes = ({ appointment = [], onCancel }) => {
    return (
        <section className='bg-[#EFEFEF] pt-[100px] pb-[111px]'>
            <h1 className='text-[40px] font-extrabold text-center'>This is a booking lists</h1>
            <p className='text-center text-[#0F0F0F] text-4 mt-4 mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <div>
                {
                    appointment.map(ba => <Appointment key={ba.id} app={ba} onCancel={onCancel}></Appointment>)
                }
            </div>
        </section>
    );
};

export default BookingsListes;