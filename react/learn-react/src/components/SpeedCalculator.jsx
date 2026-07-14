import React, { useState } from 'react'

function SpeedCalculator() {
    const [speed, setSpeed] = useState('')
    const [msg, setMsg] = useState('')
    //   console.log(speed)
    const handleSubmit = () => {
        if (speed > 80) {
            setMsg('Over Speeding')
        }else if(speed > 40 && speed <80){
               setMsg('Normal Speed')
        }else{
            setMsg('low Speed')
        }

    }
    return (
        <div>
            <h1>SpeedCalculator</h1>
            <p>{speed}</p>

            <input type="text" placeholder='type your speeed' value={speed} onChange={(e) => setSpeed(e.target.value)} />
            <button onClick={handleSubmit}>submit</button>
            <p>{msg}</p>

        </div>
    )
}

export default SpeedCalculator