import React from 'react';
import './Label.css'

class Label extends React.Component {
    
    render() {
        const props = this.props;    //object destructuring
        const style=props.active ? {background: 'green'} : {background: 'red'};
        const availability = props.active ? 'Available' : 'Currently Unavailable';
        return <label key="1" className='list-item-label' style={style} onClick={props.onAction}>{availability}</label>;
    }
    
}

export default Label;