import React, { useEffect, useState } from 'react';
import { getStoredAppoinment } from '../../utility/addToDB';
import { useLoaderData } from 'react-router';
import Appointment from '../appointment/appointment';

const BookingsListes = () => {
    const [appointment, setAppointmentList] = useState([]);
    const data = useLoaderData()

    useEffect(() => {
        const storedAppointData = getStoredAppoinment()
        const myAppointList = data.filter(appoinment => storedAppointData.includes(appoinment.id))
        // console.log(myAppointList)
        setAppointmentList(myAppointList);
        
    }, [])


    return (
        <section className='bg-[#EFEFEF] pt-[100px] pb-[111px]'>
            <h1 className='text-[40px] font-extrabold text-center'>This is a booking lists</h1>
            <p className='text-center text-[#0F0F0F] text-4 mt-4 mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <div>
                {
                    appointment.map(ba => <Appointment key={ba.id} app={ba}></Appointment>)
                }
            </div>
        </section>
    );
};

export default BookingsListes;