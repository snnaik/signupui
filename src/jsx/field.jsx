import React from 'react';
import Popup from "./popup";
import PasswordPopup from "./password-popup";

class Field extends React.Component {
    render() {
        return (
            <span className='field-container'>
                <label htmlFor={ this.props.labelFor }>{ this.props.labelTitle } <sup>*</sup></label>
                <input className={ this.props.errorClass }
                       type={ this.props.inputType }
                       name={ this.props.labelFor }
                       onFocus={ e => this.props.onFocusIn( e ) }
                       onBlur={ e => this.props.onFocusOut( e ) }/>
                { !!this.props.errorClass ?
                    <Popup text={ this.props.errorMsg ? this.props.errorMsg : 'Please enter a valid ' + this.props.labelTitle.toUpperCase() }/> : '' }
                { this.props.showPopup ? <PasswordPopup/> : '' }
            </span>
        );
    }
}

export default Field;
