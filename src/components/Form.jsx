import {React, useState} from 'react';
// import './index.css'


function Form() {
    const[userEmail, setUserEmail]= useState('')
    const[errors, setErrors]=useState({})

function userTyped(event) {
    return setUserEmail(event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();

    const validationErrors={}

    if (!userEmail.trim()) {
        validationErrors.userEmail='Email is required'
    }else if (!/\S+@\S+\.\S+/.test(userEmail)) {
        validationErrors.userEmail='Oops! Please check your email.'
    }
    setErrors(validationErrors)
}

    return <form action="" onSubmit={handleSubmit} noValidate>
    <div className='form-div'>        
        <input 
        type='email'
        placeholder='Email address'
        value={userEmail}
        onChange={userTyped}
        style={{border: errors.userEmail? 'solid #FB3E3E12px' : 'none'}}/>

        <button type='submit'>Request Access</button>
       {errors.userEmail && <span className='errors'>{errors.userEmail}</span>}
    </div>
    </form>
}

export default Form;