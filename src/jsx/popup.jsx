import React from 'react';

class Popup extends React.Component {
    render() {
        return <div className='popup'>{ this.props.text }</div>;
    }
}

export default Popup;
