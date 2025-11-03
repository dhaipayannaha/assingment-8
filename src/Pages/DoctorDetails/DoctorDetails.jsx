import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import R from '../../assets/fi_9394452.png'
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const DoctorDetails = () => {

    const { id } = useParams()
    const doctorData = useLoaderData()
    const singleDoctor = doctorData.find(doctor => doctor.id === id)

    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    // console.log(dayName);


    const { education, image, name, registration_number, speciality, working_at, available, fee } = singleDoctor

    const isAvailableToday = available.some(
        (day) => day.toLowerCase() === dayName.toLowerCase()
    );

    const handleMarkAsRead = id => {
       MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
        addToStoredDB(id)
    }


    return (
        <section className='bg-[#EFEFEF] pt-8 pb-16'>
            <div className='max-w-[1268px] mx-auto bg-white py-[72px] rounded-4xl mb-8'>
                <h1 className='text-[32px] font-extrabold text-center'>Doctor’s Profile Details</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus
                    <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
            </div>
            <div className='max-w-[1268px] mx-auto bg-white p-8 rounded-4xl mb-8 flex'>
                <div className='m-6 flex items-center gap-6'>
                    <div>
                        <img className='w-[335px] h-[383px] rounded-2xl' src={`../../../public/${image}`} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[32px] font-extrabold mb-2'>{name}</h1>

                        <p className='text-gray-500 text-[18px]'>{education}</p>
                        <p className='text-gray-500 text-[18px] mb-4 mt-1'>{speciality}</p>

                        <p>Working at</p>
                        <h3 className='text-[20px] font-bold mb-4 mt-1'>{working_at}</h3>
                        <p className='text-[#b3b3b3] mb-4'>--------------------------------------------------------------------------------</p>
                        <div className='flex items-center gap-3 mb-4'>
                            <img src={R} alt="" />
                            <p className='text-[#737373]'>{registration_number}</p>
                        </div>
                        <p className='text-[#b3b3b3] mb-4'>--------------------------------------------------------------------------------</p>
                        <div className='flex mb-4'>
                            <p className='text-[18px] font-extrabold mr-4 '>Availability: </p>
                            <div className='flex gap-4 items-center'>
                                {available.map((day, index) => {
                                    const isToday = day.toLowerCase() === dayName.toLowerCase();

                                    return (
                                        <p
                                            key={index}
                                            className={`text-[14px] px-3.5 py-[7px] border rounded-4xl font-medium 
                                                ${isToday
                                                    ? 'border-green-500 text-green-700 bg-green-100'
                                                    : 'border-amber-500 text-amber-500 bg-amber-100'
                                                }`}
                                        >
                                            {day}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                        <h2 className='text-[18px] font-extrabold '>Consultation Fee: <span className='text-[#176AE5] ml-4'>Taka: {fee}</span><span className='text-[#737373] font-medium ml-2'>(incl. Vat)</span> <span className='text-[#176AE5] font-medium ml-2'>Per Consultation</span></h2>


                    </div>
                </div>
            </div>
            <div className='max-w-[1268px] mx-auto bg-white rounded-2xl py-8'>
                <h1 className='text-[24px] font-extrabold  text-center'>Book an Appointment</h1>
                <p className='text-[#b3b3b3] mb-4 text-center'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <div className='flex justify-between mx-7'>
                    <h3>Availablity</h3>
                    {/* <p className='text-[14px] px-3.5 py-[7px] border rounded-4xl font-medium border-green-500 text-green-700 bg-green-100 mb-4'>Doctor Available Today</p> */}

                    {
                        isAvailableToday ? (<p className='text-[14px] px-3.5 py-[7px] border rounded-4xl font-medium border-green-500 text-green-700 bg-green-100 mb-4'>Doctor Available Today</p>) : (<p className='text-[14px] px-3.5 py-[7px] border rounded-4xl font-medium border-red-500 text-red-700 bg-red-100 mb-4'>Doctor Not Available Today</p>)
                    }
                </div>

                <hr className='mx-8 text-[#b3b3b3] mb-4' />

                <p className='mx-8 text-center border rounded-4xl font-medium border-amber-500 text-amber-500 bg-amber-100'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                {
                    isAvailableToday && <p onClick={() => handleMarkAsRead(id)} className='text-[20px] font-medium py-3  text-white bg-[#176AE5] rounded-4xl text-center mt-10 mx-8 '> Book Appointment Now</p>
                }


            </div>
        </section>
    );
};

export default DoctorDetails;