import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import baseStyle from './../../assets/css/globalcss';
import Input from './../common/Input';
import Button from './../common/Button';


class Register extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={baseStyle.container}>
				<Text style={styles.mainHeader}>Euleo</Text>
				<Input placeholder={'your full name'} iconName={'user'} />
				<Input placeholder={'your email'} iconName={'envelope-o'} />
				<Input placeholder={'password'} iconName={'key'} />
				<Input placeholder={'Retype Password'} iconName={'key'} />
				  <Button buttonTitle={'Register'} />

			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainHeader: {
    fontSize: 28,
    marginBottom: 25,
    color: '#605a5a',
    textAlign: 'center',
  },
});

export default Register;