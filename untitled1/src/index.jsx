import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Se você tiver um arquivo CSS global

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
