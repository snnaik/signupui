import React from 'react';
import { render } from 'react-dom';
import App from './index';
import Button from './button';
import SignUp from "./signup";

class HomePage extends React.Component {
    handleClick() {
        render( <App elToRender={ <SignUp/> }/>, document.getElementById( 'root' ) );
    }

    render() {
        return (
            <div>
                <h1>Empty Landing Page</h1>
                <Button className='action-btn' buttonTitle='Go to Sign Up page' onClick={ () => this.handleClick() }/>
            </div>
        );
    }
}

export default HomePage;
