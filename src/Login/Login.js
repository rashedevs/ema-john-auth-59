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
                <div className='or-div'>
                    <p><span>or</span></p>
                </div>
                <div>
                    <button className='google-btn'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" />
                        Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;