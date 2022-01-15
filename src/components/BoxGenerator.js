import React from 'react'

export default function BoxGenerator() {

    const colorForm = (props) => {
        const [color, setColor] = useState("");

        const sumbitForm = (e) => {
            e.preventDefault();
            props.onNewColor(color)
        }
    }
    return (
        <div>
            <form onSubmit={ sumbitForm }>
                <label>Color</label>
                <input placeholder='Enter Color Here' onChange={(e) => setColor(e.target.value)} value={color}></input>
                <button type="submit" value= "ADD">ADD</button>
            </form>
        </div>
    )
}