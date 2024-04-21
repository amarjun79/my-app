import React from 'react';
import './Label.css'

class Label extends React.Component {
    render() {
        var arr=[];
        for(var i=1;i<=4;i++){
            arr.push(<label key={i} className='list-item-label'>Label {i}</label>);
        }

        return (arr.map(function(a){
            return a;
        }));
    }
    
}

export default Label;