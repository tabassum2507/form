import {React, useState} from "react";
import './form.css'


const Form = (addInfo) => {

    const [ info, setInfo ] = useState({
        name: " ",
        email: " ",
        password: " ",
    })

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(info)
        addInfo(info)
    
        setInfo({name: " ",
                  email: " ",
                password: " "})
    }


    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h1>Register Here</h1>
                <div className="name">
                    <label>Name</label>
                    <input type="text" id="name" name="name" value={info.name} onChange={handleChange}></input>
                </div>

                <div className="email">
                    <label>Email</label>
                    <input type="email" id="email" name="email" value={info.email} onChange={handleChange}></input>
                </div>

                <div className="password">
                    <label>Password</label>
                    <input type="password" id="password" name="password" value={info.password} onChange={handleChange}>
                    </input>
                </div>

                <button type="submit" id="submit">Submit</button>
            </form>
        </div>

    )
}

export default Form;