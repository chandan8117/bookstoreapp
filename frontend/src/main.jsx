import React from 'react'
import ReactDom from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div  className='dark:bg-slate-950 dark:text-white'>
      <App/>
    </div>
  </BrowserRouter>
  
);
