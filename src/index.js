import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id : 1, text : 'Hello world!', likes: 12},
  { id : 2, text : 'My post', likes: 14},
]

let dialogsData = [
  { id : 1, name : 'Denis'},
  { id : 2, name : 'Daniil'}
]
let messagesData = [
  { id : 1, message : 'Hi'},
  { id : 2, message : 'How react going'},
  { id : 3, message : 'stayin` Alive'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogsData} messages = {messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
