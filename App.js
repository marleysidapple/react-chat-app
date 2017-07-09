import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from './src/components/Login';
import Router from './src/Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './src/reducers';

const store = applyMiddleware(thunk, promise)(createStore);

export default class App extends Component {
  render() {
    return(
    	<Provider store={store(reducers)}>
      		<Router />
      	</Provider>
    );
  }
}

