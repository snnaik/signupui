import React from 'react';
import Button from "./button";
import Field from "./field";

class Form extends React.Component {
    constructor( props ) {
        super( props );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleSubmit( e ) {
        e.preventDefault();
        return false;
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                { this.props.fields.map( ( val, i ) => {
                    return <Field key={ i }
                                  errorClass={ val.labelFor === this.props.isInvalid ? 'error' : '' }
                                  labelFor={ val.labelFor }
                                  labelTitle={ val.labelTitle }
                                  inputType={ val.inputType }
                                  inputChange={ ( e ) => this.props.inputChange( e ) }/>;
                } ) }
                <Button className='action-btn' onClick={ () => {
                } } buttonTitle='Submit'/>
            </form>
        );
    }
}

export default Form;
