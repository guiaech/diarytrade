import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);



ReactDOM.render(
    <App />,
    document.getElementById('root')
);