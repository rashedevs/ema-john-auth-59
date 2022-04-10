import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='signup-container'>
            <div>
                <h2 className='signup-title'>Sign Up</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" id="" placeholder='' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" id="" placeholder='' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm password">Confirm Password</label>
                        <input type="confirm password" name="Confirm Password" id="" placeholder='' />
                    </div>
                    <input className='signup-btn' type="button" value="Sign Up" />
                </form>
                <p>

                    Already have an account? <Link className='input-link' to='/login'>Login</Link>

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

export default SignUp;