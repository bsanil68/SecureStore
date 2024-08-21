import React, { useState } from 'react';

function EnrollForm() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/enroll-servlet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const result = await response.json();
        if (result.success) {
            setMessage('Enrollment successful!');
        } else {
            setMessage('Enrollment failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Customer Enrollment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Preferred Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Enroll</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default EnrollForm;
