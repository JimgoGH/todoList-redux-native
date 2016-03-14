/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

/*
import BigButton2 from './common/components/BigButton2';
import Navigator1 from './common/components/Navigator1';
import IptC1 from './common/components/InputChange1';
import VBAM1 from './common/components/ViewByArrayMap1';
import MT1 from './common/components/Moutons1';
*/
//import TodoList1 from './redux/todoList1/todoList1';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNA', () => RNA);
