import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <section className='bg-[#EFEFEF] py-10'>
            <div className=' max-w-[1268px] mx-auto'>
                <h3 className='text-center font-bold text-2xl mb-10'>This is blogs</h3>
                {
                    data.map(question => <Blog key={question.id} question={question}></Blog>)
                }
            </div>
        </section>
    );
};

export default Blogs;