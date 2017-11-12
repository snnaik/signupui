import React from 'react';
import Form from './form';

class SignUp extends React.Component {
    constructor( props ) {
        super( props );
        this.handleChange = this.handleChange.bind( this );

        this.state = {
            field : ''
        };

        this.fieldData = [
            {
                'labelFor' : 'fname',
                'labelTitle' : 'first name',
                'inputType' : 'text'
            },
            {
                'labelFor' : 'lname',
                'labelTitle' : 'last name',
                'inputType' : 'text'
            },
            {
                'labelFor' : 'email',
                'labelTitle' : 'email address',
                'inputType' : 'email'
            },
            {
                'labelFor' : 'password',
                'labelTitle' : 'password',
                'inputType' : 'password'
            },
            {
                'labelFor' : 'confirm',
                'labelTitle' : 'confirm password',
                'inputType' : 'password'
            }
        ];
    }

    handleChange( e ) {
        const name = e.target.name,
            value = e.target.value;

        if( value !== '' ) {
            if( name === this.fieldData[ 0 ].labelFor || name === this.fieldData[ 1 ].labelFor ) {
                if( !/[A-z a-z].*/.test( value ) ) {
                    alert( 'name' );
                }
            } else if( name === this.fieldData[ 2 ].labelFor ) {
                /[a-z_0-9\-]+@[a-z]+\.[a-z]{1,3}/.test( value ) ? this.setState( { field : '' } ) : this.setState( { field : 'email' } );
            } else if( !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test( value ) ) {
                alert( 'pw' );
            }
        }
    }

    render() {
        return (
            <div className="blur">
                <div className='main'>
                    <h2>Please Sign Up</h2>
                    <Form fields={ this.fieldData } inputChange={ ( e ) => this.handleChange( e ) } isInvalid={ this.state.field }/>
                </div>
            </div>
        );
    }
}

export default SignUp;
