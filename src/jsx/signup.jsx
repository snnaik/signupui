import React from 'react';
import Button from './button';

class SignUp extends React.Component {
    render() {
        return (
            <div className="blur">
                <div className='main'>
                    <h2>Please Sign Up</h2>

                    <form action="/submit" method="post">
                        <label htmlFor="fname">first name <sup>*</sup></label>
                        <input type='text' name='fname' pattern="[A-Za-z]" title="Letters only" required/>

                        <label htmlFor="lname">last name <sup>*</sup></label>
                        <input type='text' name='lname' pattern="[A-Za-z]" title="Letters only" required/>

                        <label htmlFor="email">email address <sup>*</sup></label>
                        <input type='email' name='email' title="Email address" required/>

                        <label htmlFor="password">password <sup>*</sup></label>
                        <input type='password' name='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number, one uppercase letter, one lowercase letter, and at least 8 or more characters" required/>

                        <label htmlFor="confirm">confirm password <sup>*</sup></label>
                        <input type='password' name='confirm' required/>

                        <Button className='action-btn' buttonTitle='Submit'/>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
