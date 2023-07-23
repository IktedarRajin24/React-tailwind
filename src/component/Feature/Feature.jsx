/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='h-4 w-4 text-green-300 mb-2' />
            <p className='mb-2 ms-2'>{feature} </p>
        </div>
    );
};

export default Feature;