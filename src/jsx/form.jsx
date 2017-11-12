import React from 'react';
import Button from "./button";
import Field from "./field";

class Form extends React.Component {
    render() {
        return (
            <form>
                { this.props.fieldData.map( ( val, i ) => {
                    return <Field key={ i }
                                  errorClass={ this.props.isInvalid[ val.labelFor ] ? 'error' : '' }
                                  labelFor={ val.labelFor }
                                  labelTitle={ val.labelTitle }
                                  inputType={ val.inputType }
                                  showPopup={ this.props.popupField === val.labelFor && this.props.showPopup }
                                  onFocusIn={ ( e ) => this.props.onFocusIn( e ) }
                                  onFocusOut={ ( e ) => this.props.onFocusOut( e ) }/>;
                } ) }
                <Button className='action-btn' onClick={ () => {
                } } buttonTitle='Submit'/>
            </form>
        );
    }
}

export default Form;
