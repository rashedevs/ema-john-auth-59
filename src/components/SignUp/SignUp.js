import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, hookerror, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("Password didn't match")
            return;
        }
        if (password.length < 6) {
            setError('Must be 6 character or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(() => {
                // const user = result?.user
                console.log('User created')
            })
    }

    return (
        <div className='signup-container'>
            <div>
                <h2 className='signup-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="1" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="2" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm password" id="3" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <p style={{ color: 'red' }}>{hookerror}</p>
                    <input className='signup-btn' type="submit" value="Sign Up" />
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