import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import baseStyle from './../../assets/css/globalcss';
import { handleRegistrationForm } from './../actions/Auth';
import Input from './../common/Input';
import Button from './../common/Button';
import { connect } from 'react-redux';
import globalcss from './../../assets/css/globalcss';

class Register extends Component {

	constructor(props){
		super(props);
	}


	onRegisterPress(){
		console.log('pressed');
	}

	render(){
		return(
			<View style={globalcss.container}>
				<Text style={styles.mainHeader}>Euleo</Text>
				<Input 
					placeholder={'your full name'} 
					iconName={'user'} 
					value={this.props.fullname} 
					onInputChange={(value) => this.props.handleRegistrationForm({prop: 'fullname', value: value})} />


				<Input placeholder={'your email'} 
						iconName={'envelope-o'} 
						value={this.props.email} 
						onInputChange={(value) => this.props.handleRegistrationForm({prop: 'email', value: value})} />


				<Input 
					placeholder={'password'} 
					iconName={'key'} 
					value={this.props.password} 
					secureTextEntry={true}
					onInputChange={(value) => this.props.handleRegistrationForm({prop: 'password', value: value})}
					 />


				<Input 
					placeholder={'Retype Password'} 
					iconName={'key'} 
					value={this.props.confirm_password} 
					secureTextEntry={true}
					onInputChange={(value) => this.props.handleRegistrationForm({prop: 'confirm_password', value: value})} 
					/>
				
				<Button buttonTitle={'Register'} onPress={this.onRegisterPress}/>
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


function mapStateToProps(state){
	console.log(state);
	return {
		fullname: state.auth.fullname,
		email: state.auth.email,
		password: state.auth.password,
		confirm_password: state.auth.confirm_password
	};
}

export default connect(mapStateToProps, { handleRegistrationForm })(Register);