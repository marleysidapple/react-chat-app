import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import globalcss from './../../assets/css/globalcss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer'
import Cellcontent from './Cellcontent';

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
				        		<Cellcontent items={rowData} />
				    	}/>
				</View>



				<View style={styles.footerStyle}>
					<TouchableOpacity style={styles.tabView}>
						<Icon style={styles.iconStyle} name={'comments'} size={22} color="#F48024"/>				
						<Text style={styles.tabTextStyle}>Chats</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.tabView} onPress={() => Actions.friends()}>
						<Icon name={'users'} size={22} color="#605a5a" />
						<Text style={styles.tabTextStyle}>Friends</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.tabView} onPress={() => Actions.profile({token: this.props.token})}>
						<Icon name={'drivers-license-o'} size={22} color="#605a5a" />
						<Text style={styles.tabTextStyle}>Profile</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.tabView}>
						<Icon name={'podcast'} size={22} color="#605a5a" />
						<Text style={styles.tabTextStyle}>More</Text>
					</TouchableOpacity>
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
  	fontSize: 12
  },

  chatDetailWrapper: {
  	flex: 1
  },


   tabBarStyle: {
            borderTopWidth : .5,
            borderColor    : '#b7b7b7',
            backgroundColor: 'white',
            opacity        : 1
        }



});


function mapStateToProps(state){
	return{
		token: state.auth_login.token
	};
}

export default connect(mapStateToProps, {})(Dashbaord); 