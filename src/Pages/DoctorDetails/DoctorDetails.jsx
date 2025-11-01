import React from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {

    const {id} = useParams()
    
    return (
        <div>
            <h1>this is Details {id}</h1>
        </div>
    );
};

export default DoctorDetails;