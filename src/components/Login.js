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
  container: {
  	backgroundColor: '#f7f4f4',
    flex: 1,
    height: null,
    width: null
  },

  mainHeader: {
  	fontSize: 28,
  	color: 'white',
  	fontWeight: '600'
  },

  textInputStyle: {
  	height: 40,
  	margin: 10,
  	padding: 10,
  	borderBottomWidth:1, 
  	borderBottomColor: 'black',
  	color: '#3d2e2e',
  	fontSize: 14
  }
});



export default Login;