import React, { useEffect, useState } from 'react'

function StopWatch() {
    const [time, setTime] = useState(0)
    const [runningMode, setRunningMode] = useState(false)

    const handleStartAndStop = () => {
        setRunningMode(prev => !prev)
    }


    const handleReset = () => {
        setTime(0)
        setRunningMode(false)
    }

    useEffect(() => {
        let intervalid;
        if (runningMode) {
            intervalid = setInterval(() => setTime(time + 1),10)
        }
        return () => clearInterval(intervalid)
    }, [time, runningMode])


    const hours = Math.floor(time / 360000)
    const mintues = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 6000) / 100)
    const millSeconds = time % 100

    return (
        <div>
            <h1>
                {hours.toString().padStart(2,'0')}:
                {mintues.toString().padStart(2,'0')}:
                {seconds.toString().padStart(2,'0')}:
                {millSeconds.toString().padStart(2,'0')}
            </h1>
            <button onClick={handleStartAndStop}>{!runningMode ? 'Start' : 'Stop'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default StopWatch
