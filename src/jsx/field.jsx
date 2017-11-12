import React from 'react';

class Field extends React.Component {
    render() {
        return (
            <span>
                <label htmlFor={ this.props.labelFor }>{ this.props.labelTitle } <sup>*</sup></label>
                <input className={ this.props.errorClass }
                       type={ this.props.inputType }
                       name={ this.props.labelFor }
                       onBlur={ ( e ) => this.props.inputChange( e ) }/>
            </span>
        );
    }
}

export default Field;
