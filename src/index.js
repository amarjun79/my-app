import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListItem from './List/ListItem';
import Header from './Components/Header';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='my-app'>
    <Header />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
  </div>
);




// import App from './App';

// const a=<div className="test">Test Div</div>  //React.CreateElement("div", { className : "test"}, "Test Div");

// const p="parent";
// const c="child";
// const pStyle={
//   color:"red", 
//   backgroundColor:"green",
//   borderRadius: "5px",
//   textAlign: "center"
// };

// var arr = [ "Label 1", "Label 2", "Label 3", "Label 4", "Label 5" ]
//React.CreateElement("div", { class: "parent"}, React.CreateElement("span", { className: "child"}, "This is a child"));

// function labelClicked(value){
//   console.log(value);
// }

// const test=<div className={p} style={pStyle}>
//     <span className={c} style={{fontSize: "35px"}}>
//       My App
//     </span>
//     <div className="body" style={{color:"blue", backgroundColor:"white"}}>
//       {
//         arr.map(function(value, index){
//           return <label key={index} onClick={function (value){
//             console.log({value});
//           }}>{value}</label>;
//         })
//       }
//     </div>
//   </div>;