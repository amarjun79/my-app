import React from 'react';
import Label from './Label';
import './ListItem.css'

function ListItem(props){
    return (
        <div className="list-item">
            <div className="list-title">
                <h3>
                    {props.title}
                </h3>
            </div>
            <div className="list-description">
                {props.desc}
            </div>
            <div className="list-label">
                <Label active={props.active}  onAction={() => {
                    props.active?alert('Added to Cart'):alert('Item not available');
                }}/>
            </div>

        </div>
    );
}

export default ListItem;