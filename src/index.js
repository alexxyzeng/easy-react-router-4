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
    AmbiguousExample,
 } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CustomLinkExample />, document.getElementById('root'));
registerServiceWorker();
