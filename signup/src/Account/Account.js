import React, { useState } from 'react'
import "./Account.css"
import { db } from '../FireBase/FireBase';
const Account = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const postData = (e) => {
        e.preventDefault();
        db.colleection('data').add({
            firstName : firstName,
            lastName : lastName,
            email : email,
            phoneNumber : phoneNumber,
        })
        .then(() => {
            alert('Message has been Submit 👍');
        })
        .catch('Something went worng 😖');
    }
    return (
        <>
            <div className="background">
                <div className="account" >
                    <div className="header">
                        <div className="header__title">
                            <h1 className="title__heading">
                                <b>Sign Up</b>
                            </h1>
                        </div>
                        <div className="header__titleContext">
                            <h4 className="titleContext__heading">
                                <span>Let's Create your account.</span>
                            </h4>
                        </div>
                    </div>
                    <div className="navbar">
                        <div className="navbar__item">Account</div>
                        <div className="navbar__item navbar__item_middle">Personal Info</div>
                        <div className="navbar__item">Personal Details</div>
                    </div>
                    <div className="note">
                        <span className="noteContext">Enter your details below</span>
                    </div>
                    <div className="details">
                        <div className="details__name">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="name__firstName" placeholder="First Name" required />
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="name__lastName" placeholder="Last Name" required />
                        </div>
                        <div className="details__email">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email" placeholder="Email" required />
                        </div>
                        <div className="details__password">
                            <input type="password" className="password" placeholder="Password" required />
                            <input type="password" className="confirm_password" placeholder="Confirm Password" required />
                        </div>
                        <div className="details__phoneNumber">
                            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="phoneNumber" placeholder="Phone number" required />
                        </div>
                    </div>
                    <div className="details__button">
                        <button className='button' onClick={postData} >Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
