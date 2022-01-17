import React, { useState } from 'react'



const BoxGenerator = (props) => {
    const [box, setBox] = useState([]);
    const [color, setColor] = useState("");

    const sumbitForm = (e) => {
        e.preventDefault();
        const newColor = {
            color: color
        };
        setBox([...box, newColor]);
        setColor("");
    }

return (
    <div>
        <div>
            <form onSubmit={sumbitForm}>
                <label>Color</label>
                <input placeholder='Enter Color Here' onChange={(e) => setColor(e.target.value)} value={color}></input>
                <button type="submit" value="ADD">ADD</button>
            </form>
            <div className='box'>
                { box.map((box,i) => {
                    return (<div key={i} style={{backgroundColor : box.color, height : 100, width :100}}/>)
                } ) }
            </div>
        </div>
    </div>
)
}

export default BoxGenerator