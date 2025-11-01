import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({ data, name, setName }) => {


    const [showAll, setShowAll] = useState(false)

    const filterDoctors = name ? data.filter((doctor => doctor.name.toLowerCase().includes(name.toLowerCase()))) : data

    const visibleDoctors = showAll ? filterDoctors : filterDoctors.slice(0, 6);


const handleReset = () =>{
    setName('')
}
    



    return (
        <section className='bg-[#EFEFEF] py-20'>
            <div className='max-w-[1268px] mx-auto'>
                <h1 className='text-[40px] font-extrabold text-center mb-4'>Our Best Doctors</h1>
                <p className='text-[16px] text-center mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <Suspense fallback={<span>Loading .....</span>}>
                    { visibleDoctors.length > 0 ? (
                        <>
                            <div className='grid grid-cols-3 gap-6'>
                                {
                                    visibleDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                                }
                            </div>

                            <div className='flex justify-center pt-12'>
                                {
                                    filterDoctors.length > 6 ? (
                                        <button onClick={() => setShowAll(!showAll)} className='text-[20px] font-medium px-[30px] py-[15.5px]  text-white bg-[#176AE5] rounded-4xl '>{showAll ? 'View Less' : 'View All Doctors'}</button>
                                    ) : (
                                         <button onClick={handleReset} className='text-[20px] font-medium px-[30px] py-[15.5px]  text-white bg-[#176AE5] rounded-4xl '> back to data</button>
                                    )
                                }
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500 text-lg">
                            No doctors found matching "<b>{name}</b>" 😕
                        </p>
                    )}
                    {/* <div className='grid grid-cols-3 gap-6'>
                        {
                            visibleDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                        }
                    </div>
                    <div className='flex justify-center pt-12'>
                        <button onClick={() => setShowAll(!showAll)} className='text-[20px] font-medium px-[30px] py-[15.5px]  text-white bg-[#176AE5] rounded-4xl '>{showAll ? 'View Less' : 'View All Doctors'}</button>
                    </div> */}
                </Suspense>


            </div>

        </section>
    );
};

export default Doctors;