import React, { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';
import Rating from '../../Components/Rate/Rating';

const Home = () => {
    const data = useLoaderData();
    const [name, setName] = useState('')
    return (
        <div>
            <Banner setName={setName}></Banner>
            <Doctors data={data} name={name} setName={setName}></Doctors>
            <Rating></Rating>
        </div>
    );
};

export default Home;