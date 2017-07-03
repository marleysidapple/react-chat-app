import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import './img/back.jpg';

export default class App extends React.Component {
  render() {
    return (
       <Image source={require('./img/back.jpg')} >
          <Text style={styles.tef}>adasd</Text>
       </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
