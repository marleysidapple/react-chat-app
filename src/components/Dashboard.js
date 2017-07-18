import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Scene } from 'react-native-router-flux';
import globalcss from './../../assets/css/globalcss';
import Icon from 'react-native-vector-icons/FontAwesome';

class Dashbaord extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(


			<View style={styles.container}>
				<View>
					<Text>View One</Text>
				</View>



				<View style={styles.footerStyle}>
					<View style={styles.tabView}>
						<Icon style={styles.iconStyle} name={'comments'} size={22} color="#1a457c" />
						<Text style={styles.tabTextStyle}>Chats</Text>
					</View>

					<View style={styles.tabView}>
						<Icon name={'users'} size={22} color="#605a5a" />
						<Text style={styles.tabTextStyle}>Friends</Text>
					</View>

					<View style={styles.tabView}>
						<Icon name={'drivers-license-o'} size={22} color="#605a5a" />
						<Text style={styles.tabTextStyle}>Profile</Text>
					</View>

					<View style={styles.tabView}>
						<Icon name={'podcast'} size={22} color="#605a5a" />
						<Text style={styles.tabTextStyle}>More</Text>
					</View>
					

				</View>
			</View>
    
		);
	}

}

const styles = StyleSheet.create({
	container: {
	    backgroundColor: '#f7f4f4',
	    justifyContent: 'space-between',
	    flex: 1,
  },

  footerStyle: {
  	flexDirection: 'row',
  	height: 55,
  	backgroundColor: '#d1cfcf',
  	//padding: 15,
  	//justifyContent: 'space-between',
  	borderTopWidth : .5,
    borderColor    : '#b7b7b7',
    opacity: 1
  },

  tabView: {
  	//justifyContent: 'space-between',  
  	alignItems: 'center',
  	padding: 8,
  	flex: 1,
  },

  tabTextStyle: {
  	alignSelf: 'center',
  	color: '#666464'
  }


});

export default Dashbaord; 