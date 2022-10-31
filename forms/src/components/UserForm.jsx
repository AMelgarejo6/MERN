import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmpassword, setConfirmpassword] = useState("");
    const [confirmpasswordError, setconfirmPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length === 0){
            setFirstnameError(null);
        }
        else if(e.target.value.length < 3) {
            setFirstnameError("First name must be 3 char or longer!");
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length === 0){
            setLastnameError(null);
        }
        else if(e.target.value.length < 2){
            setLastnameError("Last name must be 2 char or longer!");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length === 0){
            setEmailError(null);
        }
        else if(e.target.value.length < 5){
            setEmailError("Email must be 5 char or longer!");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length!== 0){
            setPasswordError("Password must be 8 char or longer!");
        }
        else{
            setPasswordError(null);
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmpassword(e.target.value);
        if(e.target.value !== password){
            setconfirmPasswordError("Password must match!");
        }
        else{
            setconfirmPasswordError(null);
        }
    }

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    }

    return(
        <>
        <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First name:</label>
                <input type="text" onChange={ handleFirstname } />
                {
                    firstnameError ?
                    <p style= {{color: 'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last name:</label>
                <input type="text" onChange={ handleLastname } />
                {
                    lastnameError ?
                    <p style= {{color: 'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style= {{color: 'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style= {{color: 'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword } />
                {
                    confirmpasswordError ?
                    <p style= {{color: 'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>

        <p>Your form data</p>
        <p>First Name: { firstname }</p>
        <p>Last Name: { lastname }</p>
        <p>Email: { email }</p>
        <p>Password: { password }</p>
        </>
    );
};

export default UserForm;