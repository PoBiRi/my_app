import React from "react";
import {useState, useEffect } from 'react';

function Clock(porps){
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const id = setInterval(() => {
        setTime(new Date());
        }, 1000);
        return (() => clearInterval(id))
    }, []);

    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간 : {time.toLocaleTimeString()}
            </h2>
        </div>
    );
}

export default Clock;