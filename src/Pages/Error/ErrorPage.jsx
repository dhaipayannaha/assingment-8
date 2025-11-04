import React from 'react';
import errorMassage from '../../assets/cute-sad-robot-404-error-page-illustration-website-app-design_1278010-4192.avif'

const ErrorPage = () => {
    return (
        <section>
            <div className='max-w-[1268px] mx-auto flex justify-center'>
                <img className='w-[500px]' src={errorMassage} alt="" />
            </div>
        </section>
    );
};

export default ErrorPage;