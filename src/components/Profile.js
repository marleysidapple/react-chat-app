import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getUserDetail } from './../actions/Login';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Grid, Row} from 'react-native-elements';

class Profile extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		//this.props.getUserDetail({token: this.props.token});
	}

	render(){
		return(
			<View style={styles.profileWrapper}>
			</View>
		);
	}
}

function mapStateToProps(state){
	return {
	};
}

const styles = StyleSheet.create({
	profileWrapper: {
		flex: 1
	}
});


export default connect(mapStateToProps, {getUserDetail})(Profile);
