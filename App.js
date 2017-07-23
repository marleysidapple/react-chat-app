import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';
import Login from './src/components/Login';
import AppWithNavigationState from './src/Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './src/reducers';


const store = applyMiddleware(thunk, promise)(createStore);

class App extends Component {
	constructor(props){
		super(props);
	}

  render() {
    return(
    	<Provider store={store(reducers)}>
      		<AppWithNavigationState />
      </Provider>
    );
  }
}



export default App;

