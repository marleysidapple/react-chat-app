import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class Login extends Component {

//<Icon name="envelope-o" size={20} color="#900" />
	render(){
		return(
		       <View style={styles.container}>
                  <Text style={styles.mainHeader}>Euleo</Text>
                  
                      <View style={styles.singleInputWrapper}>
                      <Icon style={styles.iconWrapper} name="envelope-o" size={18} color="#605a5a" />
                      <TextInput style={styles.textInputStyle} multiline={true} autoCapitalize={'none'} placeholder={'something@mail.com'}/>
                      </View>

                      <View style={styles.singleInputWrapper}>
                      <Icon style={styles.iconWrapper} name="key" size={18} color="#605a5a" />
                      <TextInput style={styles.textInputStyle} multiline={true} autoCapitalize={'none'} placeholder={'*********'}/>
                      </View>
           </View>

		);
	}

}


const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Lato'
  },

  container: {
    backgroundColor: '#f7f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: null,
    width: null,
  },

  mainHeader: {
    fontSize: 28,
    color: '#605a5a',
    textAlign: 'center',
  },

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
  }

});


export default Login;