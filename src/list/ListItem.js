import React from 'react';
import Label from './Label'

function ListItem(){
    return (
        <div className="list-item">
            <hr />
            <div className="list-title">
                <h3>
                    My Title 0
                </h3>
            </div>
            <div className="list-description">
                This is a description
            </div>
            <div className="list-label">
                <Label/>
            </div>

        </div>
    );
}

export default ListItem;