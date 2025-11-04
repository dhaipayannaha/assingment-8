import React from 'react';

const Blog = ({question}) => {
    
    return (
        <div className='p-5 bg-white mb-3 rounded-2xl'>
            <h1><span className='text-xl font-semibold mr-5'>Question:</span> {question.question}</h1>
            <h1><span className='text-xl font-semibold mr-5'>Answer:</span> {question.answer}</h1>
        </div>
    );
};

export default Blog;