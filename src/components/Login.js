import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Input from './../common/Input';
import Button from './../common/Button';
import globalcss from './../../assets/css/globalcss';

class Login extends Component {

//<Icon name="envelope-o" size={20} color="#900" />
	render(){
		return(
		       <View style={globalcss.container}>
                  <Text style={styles.mainHeader}>Euleo</Text>
                  
                      <Input iconName={'envelope-o'} placeholder={'johndoe@mail.com'}/>
                      <Input iconName={'key'} placeholder={'*********'} secureTextEntry={true}/>
                      <Button buttonTitle={'Login'} />
                        
                        
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

  linkToRegister: {
    //flex: 1,
    flexDirection: 'row',
   
  },

  standardText: {
     color: '#605a5a'
  }

});


export default Login;