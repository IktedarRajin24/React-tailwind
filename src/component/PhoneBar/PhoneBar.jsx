/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => {
            const loadedData = res.data.data;
            const phoneData = loadedData.map(data => {
                const phonePrice = parseInt(data.slug.split('-')[1]);
                const phoneInfo ={
                    name : data.phone_name,
                    price : phonePrice
                }
                return phoneInfo;   
            })
            setPhones(phoneData);
        })
    }, [])
    return (
        <div>
            <BarChart width={1500} height={400} data={phones} className='mx-auto my-20'>
                <Bar dataKey="price" fill="#8884d8" />
                <Tooltip></Tooltip>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
            </BarChart>
        </div>
    );
};

export default PhoneBar;