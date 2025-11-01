import React, { Suspense } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data }) => {
    console.log(data)
    return (
        <section className='bg-[#EFEFEF] py-20'>
            <div className='max-w-[1268px] mx-auto'>
                <h1 className='text-[40px] font-extrabold text-center mb-4'>Our Best Doctors</h1>
                <p className='text-[16px] text-center mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <Suspense fallback={<span>Loading .....</span>}>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            data.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                        }
                    </div>
                </Suspense>
               <div className='flex justify-center pt-12'>
                 <button className='text-[20px] font-medium px-[30px] py-[15.5px]  text-white bg-[#176AE5] rounded-4xl '>View All Doctors</button>
               </div>

            </div>

        </section>
    );
};

export default Doctors;