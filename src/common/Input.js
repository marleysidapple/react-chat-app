import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Input extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			 <View style={styles.singleInputWrapper}>
                <Icon style={styles.iconWrapper} name={this.props.iconName} size={18} color="#605a5a" />
                <TextInput style={styles.textInputStyle} 
                           multiline={true} 
                           autoCapitalize={'none'}
                           value={this.props.value}
                           onChangeText={this.props.onInputChange} 
                           placeholder={this.props.placeholder}
                           secureTextEntry={true}
                           />
             </View>
      </TouchableWithoutFeedback>
		);
	}

}

const styles = StyleSheet.create({
	textInputStyle: {
    margin: 10,
   // padding: 5,
    height: 35,
    borderBottomColor: '#b7b5b5',
    borderBottomWidth: 0.5,
    color: '#3d2e2e',
    fontSize: 14,
    flex: 1
  },

  singleInputWrapper: {
      flexDirection: 'row'
  },

  iconWrapper: {
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 10
  },
});

export default Input;