import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import baseStyle from './../../assets/css/globalcss';

class Register extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={baseStyle.container}>
				<Text>Welcome to register</Text>
			</View>
		);
	}
}

export default Register;