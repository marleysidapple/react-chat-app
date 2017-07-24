import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getUserDetail } from './../actions/Login';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		//this.props.getUserDetail({token: this.props.token});
	}

	render(){
		return(
			<Text>{'sad'}</Text>
		);
	}
}

function mapStateToProps(state){
	return {
	};
}

export default connect(mapStateToProps, {getUserDetail})(Profile);
