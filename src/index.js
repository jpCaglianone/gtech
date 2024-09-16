import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
// import Desativado from './desativado';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const __WORKING = true

// if (!__WORKING) {
//   root.render(
//     <React.StrictMode>
//       <Desativado />
//     </React.StrictMode>
//   );
// }
// else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
   );
;;}


