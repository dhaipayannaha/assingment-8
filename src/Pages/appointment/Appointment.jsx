
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Appointment = ({ app, onCancel }) => {
    const notify = () => toast("Wow so easy!");
    const { name, education, fee, id } = app;

    const cancelAppointment = () => {
        if (typeof onCancel === 'function') {
            // call toast then notify parent
            notify();
            onCancel(id);
        } else {
            console.warn('onCancel prop is not a function', onCancel);
        }
    };

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
            <p onClick={cancelAppointment} className='text-[#FF0000] text-[20px] font-semibold border rounded-4xl text-center py-3'>Cancel Appointment</p>
            <ToastContainer />
        </div>
    );
};

export default Appointment;