import React from 'react';

function Label(){
    var arr=[];
    for(var i=0;i<4;i++){
        arr.push(<label>Label {i}</label>);
    }

    return (arr.map(function(a){
        return a;
    }));
}

export default Label;