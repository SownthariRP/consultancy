import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import bg from './bg1.jpg'

const Login = () => {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/products";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (

        <div className="register"> 
        <div className="col-1">
            <h2>Login</h2>
            <span>Welcome again!</span>
            <form id = "form" className='flex flex-col' onSubmit={loginSubmit}>

                <div class="data">
                    <input type="email" name="email" required 
                    placeholder="Email" value={user.email} onChange={onChangeInput}/>
                </div>

                <div class="data">
                    <input type="password" name="password" required
                    placeholder="Password" value={user.password} onChange={onChangeInput} />
                </div>
                <div className="btn1">
                    <button type="submit">Login</button>

                </div>
                <div class="signup-link">
                    Not a member? <Link to={"/register"}><span className="sign">Signup now</span> </Link>
                </div>
            </form>
            </div>
            <div className="col-2">
                <img src={bg}></img>
            </div>
        </div>
            
            
    )
}

export default Login;

