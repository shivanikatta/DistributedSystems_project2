import React from 'react';
import reactDom from 'react-dom';
import Subscriber1 from './components/Subscriber1';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubscriberList from './components/SubscriberList';
import MainComponent from './components/MainComponent';
import App from './components/App'

reactDom.render(<MainComponent />,document.getElementById('root')); 
//reactDom.render(<Subscriber1 />,document.getElementById('rootpub')); 