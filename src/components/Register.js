import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import baseStyle from './../../assets/css/globalcss';
import { handleRegistrationForm } from './../actions/Auth';
import Input from './../common/Input';
import Button from './../common/Button';
import { connect } from 'react-redux';


class Register extends Component {

	constructor(props){
		super(props);
	}

	// onRegisterValueChange(prop, val){
	// 	this.props.handleRegistrationForm(prop, val);
	// }

	onRegisterPress(){
		console.log('pressed');
	}

	render(){
		return(
			<View style={baseStyle.container}>
				<Text style={styles.mainHeader}>Euleo</Text>
				<Input placeholder={'your full name'} iconName={'user'} value={this.props.fullname} onInputChange={this.props.handleRegistrationForm({prop: 'fullname', value: this.props.fullname})} />
				<Input placeholder={'your email'} iconName={'envelope-o'} value={this.props.email} onInputChange={this.props.handleRegistrationForm({prop:'email', value:this.props.email})} />
				<Input placeholder={'password'} iconName={'key'} value={this.props.password} onInputChange={this.props.handleRegistrationForm({prop:'password', value:this.props.password})}  />
				<Input placeholder={'Retype Password'} iconName={'key'} value={this.props.confirm_password} onInputChange={this.props.handleRegistrationForm({prop:'confirm_password', value:this.props.confirm_password})} />
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