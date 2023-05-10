import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './register.css'
import bg from './bg1.jpg'

const Register = () => {
    const [user, setUser] = useState({
        name:'', email:'', password:'',address:'',phno:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/products";
        } catch (err) {
            alert(err.response.data.msg) 
        }
    }
    return (
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>
                <form id = "form" className='flex flex-col' onSubmit={registerSubmit}>
                
                    <div class="data">
                        <input type="text" name="name" required
                        placeholder="Name" value={user.name} onChange={onChangeInput} />
                    </div>

                    <div class="data">
                        <input type="email" name="email" required
                        placeholder="Email" value={user.email} onChange={onChangeInput} />
                    </div>

                    <div class="data">
                        <input type="password" name="password" required
                        placeholder="Password" value={user.password} onChange={onChangeInput} />
                    </div>
                    <div class="data">
                        <input type="text" name="address" required
                        placeholder="Address" value={user.address} onChange={onChangeInput} />
                    </div>
                    <div class="data">
                        <input type="text" name="phno" required
                        placeholder="Phone Number" value={user.phno} onChange={onChangeInput} />
                    </div>

                    <div className="btn">
                        <button type="submit">Register</button>
                    </div>

                    <div className="signup-link">
                        Already a member? <Link to={"/login"}><span className="sign">Login</span> </Link>
                    </div>
                </form>
            </div>
            <div className="col-2">
                <img src={bg}></img>
            </div>
        </div>
    )
}

export default Register;


