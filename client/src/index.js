import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import {STORE_Device} from "./actions/ga";
import store from './store'; 
import {isMobile} from 'react-device-detect';
import {ISMOBILE} from "./actions/UI";
let Device="desktop";
if(isMobile){ Device="mobile" ; ISMOBILE(true);}

STORE_Device(Device)

ReactDOM.render(
        <Provider store={ store }>
            <div id="Statto" className={Device}>
                <App />
            </div>
        </Provider>, 
    document.getElementById('root'));