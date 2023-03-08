import App from './main/board/App';
import Dashboard from './main/dashboard/Dashboard';
import Header from './main/header/Header';
import SubHeader from './main/subheader/SubHeader';
import Sidebar from './side/sidebar/Sidebar';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="main">
      <Header />
      <SubHeader />
      <Dashboard />
      <App />
    </div>
    <div className="loaderContainer" id="loader">
    <h3>Loading...</h3>
      <div className="progress">
        <div className="color"></div>
      </div>
    </div>
  </React.StrictMode>
);



