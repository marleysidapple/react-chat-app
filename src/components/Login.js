import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


class Login extends Component {

	render(){
		return(
		        <View style={styles.container}>
		              <Text style={styles.mainHeader}>Euleo</Text>
		              <TextInput style={styles.textInputStyle} placeholder={'Enter email'}/>
		              <TextInput style={styles.textInputStyle} placeholder={'Enter email'}/>
		         </View>
		);
	}

}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Lato'
  },

  container: {
  	backgroundColor: '#f7f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: null,
    width: null,
  },

  mainHeader: {
  	fontSize: 28,
    color: '#605a5a'
    //textAlign: 'center',
  },

  textInputStyle: {
    margin: 10,
    padding: 10,
  	height: 40,
    borderBottomWidth: 0,
  	color: '#3d2e2e',
  	fontSize: 14
  }
});



export default Login;