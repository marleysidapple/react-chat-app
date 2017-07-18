import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from './../common/Button';
import { Actions } from 'react-native-router-flux';

class Landing extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			
			
				<Image style={styles.landingWrapper} source={require('./../../assets/img/back1.jpg')}>
						<View style={styles.landingContainer}>
							<Image style={styles.mainWrapper} source={require('./../../assets/img/logo.png')} />
							<Text style={styles.logoItem}>EULEO</Text>

							<TouchableOpacity style={styles.buttonWrapper} onPress={() => Actions.login({'type': 'reset'})}>
				                <Text style={styles.buttonText}>{'Get Started'}</Text>
				            </TouchableOpacity>
						</View>

					



				</Image>
			
		);
	}
}


const styles = StyleSheet.create({
	landingWrapper: {
		flex: 1,
		width: undefined,
	    height: undefined,
	    backgroundColor:'transparent',
	},
	mainWrapper: {
		height: 100,
		width: 100,
		alignSelf: 'center'
	},
	logoItem: {
		alignSelf: 'center',
		paddingTop: 5,
		fontSize: 26,
		letterSpacing: 3,
		paddingLeft: 7,
		fontWeight: 'bold',
		color: '#fff'
	},

	landingContainer: {
		flex: 1,
		justifyContent: 'center'
	},

	buttonWrapper: {
		backgroundColor: '#F48024',
		margin: 18,
		padding: 10,
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: .5,
		borderColor: '#b7b7b7'
	},

	buttonText: {
		color: '#fff',
		fontSize: 15
	}

});

export default Landing;