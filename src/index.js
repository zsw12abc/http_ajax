import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//global access configuration
//add based URL for all the httprequest url
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';//default


//global interceptors
axios.interceptors.request.use(request => {
    console.log(request);
    //edit request config globally
    return request;//otherwise block request
}, error => {
    console.log(error);
    return Promise.reject(error);//still handle them in the catch block locally in a component
});

axios.interceptors.response.use(response => {
    console.log(response);
    //edit request config globally
    return response;//otherwise block request
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
