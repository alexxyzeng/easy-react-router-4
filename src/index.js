import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
    BasicExample, 
    ParamsExample,
    AuthExample,
    CustomLinkExample,
    PreventingTransitionExample,
    RecursiveExample,
    NoMatchExample,
 } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NoMatchExample />, document.getElementById('root'));
registerServiceWorker();
