import React from 'react';
import Label from './Label'

function ListItem(index){
    return (
        <div className="list-item">
            <hr />
            <div className="list-title">
                <h3>
                    My Title {index}
                </h3>
            </div>
            <div className="list-description">
                This is a description
            </div>
            <div className="list-label">
                <Label index={index}/>
            </div>

        </div>
    );
}

export default ListItem;