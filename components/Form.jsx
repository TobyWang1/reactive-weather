import { useState } from 'react'

function Form({ setLocation }) {
    const [typedLocation, setTypedLocation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setLocation(typedLocation);
        setTypedLocation("")
    }

    return (
    <form onSubmit={handleSubmit}>
        <label className="city">
            City: <input type="text" value={typedLocation} onChange={(e) => setTypedLocation(e.target.value)}/>
        </label>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
    )
}

export default Form;