import React from 'react';
import Form from './form';

class SignUp extends React.Component {
    constructor( props ) {
        super( props );
        this.handleFocusOut = this.handleFocusOut.bind( this );
        this.handleFocusIn = this.handleFocusIn.bind( this );

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

        this.state = {
            isInvalid : {},
            showPopup : false,
            errorShown : false
        };
    }

    handleFocusOut( e ) {
        const name = e.target.name,
            value = e.target.value;

        let isInvalid = false;

        if( value !== '' ) {
            if(
                ( ( name === this.fieldData[ 0 ].labelFor || name === this.fieldData[ 1 ].labelFor ) && !/[A-Z a-z].*/.test( value ) )
                || ( name === this.fieldData[ 2 ].labelFor && !/[a-z_0-9\-]+@[a-z]+\.[a-z]{1,3}/.test( value ) )
                || ( name === this.fieldData[ 3 ].labelFor && !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test( value ) )
            ) {
                isInvalid = true;
            }

            this.setState( {
                isInvalid : Object.assign( {}, this.state.isInvalid, { [ name ] : isInvalid } ),
                errorShown : isInvalid
            } );
        }
    }

    handleFocusIn( e ) {
        let name = e.target.name;

        if( this.state.isInvalid[ name ] ) {
            e.target.classList.remove( 'error' );
            this.setState( {
                isInvalid : Object.assign( {}, this.state.isInvalid, { [ name ] : false } ),
                errorShown : false
            } );
        }

        this.setState( { showPopup : !this.state.errorShown && name === this.fieldData[ 3 ].labelFor } );
    }

    render() {
        return (
            <div className="blur">
                <div className='main'>
                    <h2>Please Sign Up</h2>
                    <Form fieldData={ this.fieldData }
                          onFocusOut={ ( e ) => this.handleFocusOut( e ) }
                          onFocusIn={ ( e ) => this.handleFocusIn( e ) }
                          popupField={ this.fieldData[ 3 ].labelFor }
                          showPopup={ this.state.showPopup }
                          isInvalid={ this.state.isInvalid }/>
                </div>
            </div>
        );
    }
}

export default SignUp;
