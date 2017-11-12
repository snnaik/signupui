import React from 'react';

class PasswordPopup extends React.Component {
    render() {
        return (
            <div className='popup'>
                Password must contain:
                <ul>
                    <li>minimum 8 characters</li>
                    <li>1 lowercase letter</li>
                    <li>1 uppercase letter</li>
                    <li>1 number</li>
                    <li>NO symbols or special characters</li>
                </ul>
            </div>
        );
    }
}

export default PasswordPopup;
