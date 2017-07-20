import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


class Cellcontent extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<TouchableOpacity style={styles.cellStyle}>
				<Image style={styles.userThumb} source={require('./../../assets/img/users/five.png')} />
				<View style={styles.previewWrapper}>
					<Text numberOfLines={1} style={styles.chatPreview}>{'Hey!! There is something over there. See today is really beautiful day and I am really liking it a lot. Wanna come over? Hey!! There is something over there. See today is really beautiful day and I am really liking it a lot. Wanna come over? Hey!! There is something over there. See today is really beautiful day and I am really liking it a lot. Wanna come over?'}</Text>
					<Text style={styles.dateUpdated}>17/06/2017</Text>
				</View>
			</TouchableOpacity>
		);
	}

}

const styles = StyleSheet.create({
  cellStyle:{
  	flex: 1,
  	flexDirection: 'row',
  	paddingTop: 20,
  	paddingBottom: 20,
  	paddingLeft: 10,
  	borderBottomWidth: .4,
  	borderColor: '#b7b7b7',
    opacity: 1,
  },

  userThumb: {
  	height: 45,
  	width: 45
  },

  previewWrapper: {
  	flex: 1,
  	flexDirection: 'column',
  	marginLeft: 8,
  	marginRight: 8
  },

  chatPreview: {
  	color: "#5D656E"
  },

  dateUpdated: {
    color: "#5D656E",
  	marginTop: 8,
  	fontWeight: 'bold'
  }

  // chatPreview: {
  // 	justifyContent: 'center',
  // 	alignItems: 'center'
  // }

});

export default Cellcontent;