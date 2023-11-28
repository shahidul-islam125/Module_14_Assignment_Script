import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import CounterCard from './CounterCard';

const Counter = () => {
    const [counterData, setCounterData] = useState(null)

    useEffect(() => {
        fetch('/dataBase/counterData.json')
        .then(res => res.json())
        .then(data => setCounterData(data))
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {
                    counterData === null ? <Loader/> 
                    : counterData.map((data, index) => <CounterCard key={index} data={data}/>)
                }
            </div>
            
        </div>
    );
};

export default Counter;