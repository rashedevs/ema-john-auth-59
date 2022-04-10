import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate()


    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault()
        const shipping = { name, phone, address }
        console.log(shipping)

    }
    return (
        <div className='signup-container'>
            <div>
                <h2 className='signup-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="1" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Email</label>
                        <input value={user?.email} type="text" name="email" id="6" readOnly />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="number" name="phone" id="2" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="3" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='signup-btn' type="submit" value="Proceed" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;