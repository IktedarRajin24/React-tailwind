/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Link = ({route}) => {
    // console.log(route);
    return (
        <li className='ms-5 mb-5 hover:bg-purple-600 hover:text-white p-3'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;