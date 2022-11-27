import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let companionsData = [
  {id:"1", name: "Андрей"},
  {id: "2", name: "Игорь"},
  {id:"3", name:"Света"}, 
  {id:"4", name:"Антон"},
];

let messagesData = [
  {id:"1", content: "Привет! Как дела?"},
  {id: "2", content: "Привет! Нормально, у тебя как?"},
  {id:"3", content: "Хорошо. Пойдём гулять?"}, 
  {id:"4", content:"Да, пошли! Только сначала мне нужно сделать пару дел, а имменно: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores recusandae, adipisci minus quo incidunt aspernatur iste repellat at voluptate numquam beatae, quasi velit ipsa facere, eaque animi deserunt possimus. Nostrum."},
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      companionsData ={companionsData}
      messagesData = {messagesData} 
      />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

