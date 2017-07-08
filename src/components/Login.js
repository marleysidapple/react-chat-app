import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


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

                    
                        <TouchableOpacity style={styles.buttonWrapper}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>

                        
                          <View style={styles.linkToRegister}>
                            <Text style={styles.standardText}>{'Dont have an account?'}</Text>
                            <TouchableOpacity>
                              <Text style={styles.standardText} onPress={() => Actions.register()}>{'Click here to register'}</Text>
                            </TouchableOpacity>
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
    marginBottom: 25,
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
  },


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

  linkToRegister: {
    //flex: 1,
    flexDirection: 'row',
   
  },

  standardText: {
     color: '#605a5a'
  }

});


export default Login;