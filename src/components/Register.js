import React, { Component, PropTypes } from 'react';
import { Text, ScrollView, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import baseStyle from './../../assets/css/globalcss';
import { handleRegistrationForm, createUser } from './../actions/Auth';
import Input from './../common/Input';
import Button from './../common/Button';
import { connect } from 'react-redux';
import globalcss from './../../assets/css/globalcss';

class Register extends Component{

	constructor(props){
		super(props);
	}


	componentWillReceiveProps(nextProps){
		if (nextProps.err != null){
			Alert.alert(
				'Error',
				nextProps.err
			);
		}
	}


	onRegisterPress(){
		if (this.props.fullname == "" || this.props.email == "" || this.props.password == "" || this.props.confirm_password == ""){
			Alert.alert(
				'Value missing',
				'All fields are mandatory'
			);
		} else if(this.props.password != this.props.confirm_password){
				Alert.alert(
					'Password error',
					'Password and confirm password should be same'
				);
		} else{
			const user = {
				fullname: this.props.fullname,
				email: this.props.email,
				password: this.props.password
			}
			this.props.createUser(user);
			}
	}


	showEitherButtonOrSpinner(){
		if (this.props.loading){
			return <ActivityIndicator size={'small'}/>;
		} 
		return <Button buttonTitle={'Register'} onPressedAction={this.onRegisterPress.bind(this)}/>;
	}


	render(){
		return(
			<ScrollView contentContainerStyle={globalcss.container}>
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
						
					{this.showEitherButtonOrSpinner()}
			</ScrollView>
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
	
	return {
		fullname: state.auth.fullname,
		email: state.auth.email,
		password: state.auth.password,
		confirm_password: state.auth.confirm_password,
		loading: state.auth.loading,
		err: state.auth.err
	};
}

export default connect(mapStateToProps, { handleRegistrationForm, createUser })(Register);