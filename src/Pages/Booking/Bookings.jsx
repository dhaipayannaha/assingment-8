import React, { useEffect, useState } from 'react';
import BookingsListes from '../BookingListes/BookingsListes';
import Rechart from '../Rechart/Rechart';
import { useLoaderData } from 'react-router';
import { getStoredAppoinment } from '../../utility/addToDB';
import errorMassage from '../../assets/cute-sad-robot-404-error-page-illustration-website-app-design_1278010-4192.avif'

const Bookings = () => {
    const [appointment, setAppointmentList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedAppointData = getStoredAppoinment()
        const myAppointList = data.filter(appoinment => storedAppointData.includes(appoinment.id))

        setAppointmentList(myAppointList);
    }, [data])
    const handleCancel = (id) => {
        // update localStorage stored IDs
        const storedAppointments = getStoredAppoinment();
        const updatedStoredIds = storedAppointments.filter(appId => appId !== id);
        localStorage.setItem("readList", JSON.stringify(updatedStoredIds));

        
        setAppointmentList(prev => prev.filter(a => a.id !== id));
    };
    return (
        <div>
            {
                appointment.length !== 0 ? (
                    <><Rechart appointment={appointment}></Rechart>
            <BookingsListes appointment={appointment} onCancel={handleCancel}></BookingsListes></>
                    
                ) :(
                    <>
                    <div className='max-w-[1268px] mx-auto flex justify-center'>
                        <img className='w-[500px] mt-10' src={errorMassage} alt="" />
                    </div>
                    </>
                )
            }
            
        </div>
    );
};

export default Bookings;