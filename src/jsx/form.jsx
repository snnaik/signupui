import React from 'react';
import Button from "./button";
import Field from "./field";

class Form extends React.Component {
    constructor( props ) {
        super( props );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleSubmit( e ) {
        let hasError = false,
            formEmpty = false,
            isInvalid = this.props.isInvalid,
            fields = {};

        for( let key in isInvalid ) {
            if( isInvalid.hasOwnProperty( key ) && isInvalid[ key ] ) {
                hasError = true;
                break;
            }
        }

        if( hasError ) {
            e.preventDefault();
            alert( 'Please correct the errors on the form' );
            return false;
        }

        this.props.fieldData.forEach( val => {
            let el = document.getElementsByName( val.labelFor )[ 0 ];
            if( el.value === '' ) {
                fields[ val.labelFor ] = true;
                formEmpty = true;
            }
        } );

        if( formEmpty ) {
            e.preventDefault();
            this.props.invalidateFields( fields );
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                { this.props.fieldData.map( ( val, i ) => {
                    return <Field key={ i }
                                  errorClass={ this.props.isInvalid[ val.labelFor ] ? 'error' : '' }
                                  labelFor={ val.labelFor }
                                  labelTitle={ val.labelTitle }
                                  inputType={ val.inputType }
                                  errorMsg={ val.errorMsg }
                                  showPopup={ this.props.popupField === val.labelFor && this.props.showPopup }
                                  onFocusIn={ e => this.props.onFocusIn( e ) }
                                  onFocusOut={ e => this.props.onFocusOut( e ) }/>;
                } ) }
                <Button className='action-btn' onClick={ () => {
                } } buttonTitle='Submit'/>
            </form>
        );
    }
}

export default Form;
