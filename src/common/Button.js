import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Button extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<TouchableOpacity style={styles.buttonWrapper} onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.buttonTitle}</Text>
            </TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	buttonWrapper: {
    borderColor: '#b7b5b5',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    margin: 25,
    alignSelf: 'stretch',

  },

  buttonText: {
    alignSelf: 'center',
    color: '#605a5a'
  },

});


export default Button;