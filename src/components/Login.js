import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import './../../img/back.jpg';

class Login extends Component {

	render(){
		return(
			<Image source={require('./../../img/back.jpg')} style={styles.container}>
		        <View style={styles.overlay}>
		              <Text style={styles.mainHeader}>Euleo</Text>
		         </View>
		     </Image>
		);
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null
  },

   overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },

  mainHeader: {
  	fontSize: 28,
  	color: '#560707',
  	fontWeight: '600'
  }
});



export default Login;