import React from 'react';
import './Tools.css';
import Button from './Button';

class Tools extends React.Component {
    render() {
        const { children, onAction } = this.props;
        const child = React.Children.only(children);
        const itemCount = React.Children.count(child.props.children);
        
        return <div className='list-tools'>
            <div className='list-header'>
                <Button name="products" value="Add new record" onAction={() => {
                    
                }} />
                <select name="filter" onChange={onAction}>
                    <option value="all">All</option>
                    <option value="available">Available</option>
                    <option value="unavailable">Not Available</option>
                </select>
            </div>
            {children}
            <div className='list-footer'>
                Showing {itemCount}
            </div>
        </div>;
    }
}

export default Tools;