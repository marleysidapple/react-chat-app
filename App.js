import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from './src/components/Login';
import Router from './src/Router';

export default class App extends Component {
  render() {
    return(
      <Router />
    );
  }
}

