import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getUserDetail } from './../actions/Login';
import globalcss from './../../assets/css/globalcss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cellcontent from './Cellcontent';

class Dashbaord extends Component {


	componentWillMount(){
		//this.props.getUserDetail({token: this.props.navigation.state.params.token});
	}

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
				<Text>{'asdasd'}</Text>
				<View style={styles.chatDetailWrapper}>
					<ListView
						style={styles.listViewContainer}
				        dataSource={this.state.dataSource}
				        renderRow={
				        		(rowData) =>
				        		<Cellcontent items={rowData} />
				    	}/>
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


  tabTextStyle: {
  	alignSelf: 'center',
  	color: '#666464',
  	fontSize: 12
  },

  chatDetailWrapper: {
  	flex: 1
  },

});


function mapStateToProps(state){
	return{
		token: state.auth_login.token,
		nam: state.auth_detail.fullname
	};
}

export default connect(mapStateToProps, {getUserDetail})(Dashbaord);
