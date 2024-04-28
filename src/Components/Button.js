import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        const {name, value, onAction} = this.props;
        return <div className='list-button-div'>
            <button name={name} value={value} className='list-button' onClick={onAction}><i class="fa fa-home"></i>{value}</button>
        </div>
    }
}

export default Button;