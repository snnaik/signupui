import React from 'react';
import { render } from 'react-dom';
import App from './index';
import SignUp from './signup';

class Button extends React.Component {
    handleClick() {
        render( <App elToRender={ <SignUp/> }/>, document.getElementById( 'root' ) );
    }

    render() {
        return <button className={ this.props.className } onClick={ this.handleClick }>{ this.props.buttonTitle }</button>;
    }
}

export default Button;
