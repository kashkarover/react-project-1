import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Naruto' },
  { id: 2, name: 'Sakura' },
  { id: 3, name: 'Sasuke' },
  { id: 4, name: 'Pain' },
  { id: 5, name: 'Deidara' },
  { id: 6, name: 'Itachi' },
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hola' },
  { id: 3, message: 'Hallo' },
  { id: 4, message: 'Hello' },
  { id: 5, message: 'Konnichiwa' },
  { id: 6, message: 'Привет' },
];

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 15 },
  { id: 2, message: "It's my first post!", likesCount: 12 },
  { id: 3, message: 'My name is Ravil', likesCount: 7 },
  { id: 4, message: 'I love React!', likesCount: 45 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
