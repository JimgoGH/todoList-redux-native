/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';


import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './redux/todoList1/containers/App';
import todoApp from './redux/todoList1/reducers/reducer';

let store = createStore(todoApp);

class RNA extends Component {
  render() {
    return(      
      <Provider store={store}>
        <App />
      </Provider>
    );  
  }
}

AppRegistry.registerComponent('RNA', () => RNA);
