//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';


//ReactDOM.render(
  //<React.StrictMode>
 //   <App />
 // </React.StrictMode>,
 // document.getElementById('root')
//);

import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the use of 'react-dom/client'
import App from './App';
import './index.css'; // Ensure your Tailwind CSS is imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
