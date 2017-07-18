import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView } from 'react-native';
import { Scene } from 'react-native-router-flux';
import globalcss from './../../assets/css/globalcss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer'

class Dashbaord extends Component {

	constructor(props){
		super(props);
		 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	     this.state = {
	      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 4', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11', 'row 12', 'row 13', 'row 14', 'row 15', 'row 16', 'row 17']),
	    };
	}

	render(){
		return(


			<View style={styles.container}>
				<View style={styles.chatDetailWrapper}>
					<ListView 
						style={styles.listViewContainer}
				        dataSource={this.state.dataSource}
				        renderRow={
				        		(rowData) => 
				        		<View style={styles.singleCellContainer}>
				        			<Text>{rowData}</Text>
				        		</View>
				    	}/>
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
  	borderTopWidth : .5,
    borderColor    : '#b7b7b7',
    opacity: 1,     
  },

  tabView: {
  	//justifyContent: 'space-between',  
  	alignItems: 'center',
  	padding: 8,
  	flex: 1,
  },

  tabTextStyle: {
  	alignSelf: 'center',
  	color: '#666464',
  },

  chatDetailWrapper: {
  	flex: 1
  },



  singleCellContainer:{
  	flex: 1,
  	padding: 25,
  	borderBottomWidth: .4,
  	borderColor: '#b7b7b7',
    opacity: 1,
  }


});

export default Dashbaord; 