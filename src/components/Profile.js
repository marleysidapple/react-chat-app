import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getUserDetail } from './../actions/Login';
import Icon from 'react-native-vector-icons/FontAwesome';



class Profile extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.getUserDetail({token: this.props.token});
	}

	render(){
		return(
			<Text>{this.props.fullname}</Text>
		);
	}
}


function mapStateToProps(state){
	return {
		fullname: state.auth_detail.fullname,
		email: state.auth_detail.email
	};
}


export default connect(mapStateToProps, {getUserDetail})(Profile);