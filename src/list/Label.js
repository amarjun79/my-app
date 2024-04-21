import React from 'react';

function Label(index){
    var arr=[];
    for(var i=0;i<index;i++){
        arr.push(<label>Label {i}</label>);
    }

    return arr.join("<br />");
}

export default Label;