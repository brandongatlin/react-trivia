import React, {useState} from 'react';

const Timer = (props)=> {

    const [remaining, setRemaining] = useState(10);

    const clockTick = ()=> {
        const newRemaining = remaining - 1;
        setRemaining(newRemaining);
        window.clearInterval(interval);
    }

    const interval = window.setInterval(clockTick, 1000);

    return (
        <h1>Remaining: {remaining}</h1>
    )
    
}

export default Timer;