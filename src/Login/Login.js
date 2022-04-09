import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <div>
                <h2 className='login-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" id="" placeholder='' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" id="" placeholder='' />
                    </div>
                    <input className='login-btn' type="button" value="Login" />
                </form>
                <p>

                    New to Ema-John? <Link className='input-link' to='/signup'>Create an account</Link>

                </p>
            </div>
        </div>
    );
};

export default Login;