import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux';
import {mainReducer, mapStatetoProps} from './reducers/mainReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(mainReducer)
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store ={store}><App /></Provider>, rootElement);
