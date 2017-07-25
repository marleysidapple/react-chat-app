import React, { Component } from 'React';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Friends extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Text>Display friend list here</Text>
		);
	}
}


function mapStateToProps(state){
	console.log(state);
}

export default connect(mapStateToProps, {})(Friends);
