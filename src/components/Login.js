import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { handleLoginForm } from './../actions/Login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Input from './../common/Input';
import Button from './../common/Button';
import globalcss from './../../assets/css/globalcss';

class Login extends Component {

  onLoginPress(){
    if (this.props.email == "" || this.props.password == ""){
          Alert.alert(
            'Missing value',
            'All fields are required'
          );
    }
  }


	render(){
		return(
		       <View style={globalcss.container}>
                  <Text style={styles.mainHeader}>Euleo</Text>
                  
                      <Input 
                        iconName={'envelope-o'} 
                        placeholder={'Enter your email'}
                        value={this.props.email}
                        onInputChange={(value) => this.props.handleLoginForm({prop:'email', value: value})} />

                      <Input iconName={'key'} 
                             placeholder={'Enter your password'} 
                             value={this.props.password}
                             onInputChange={(value) => this.props.handleLoginForm({prop: 'password', value: value})}
                             secureTextEntry={true} />


                      <Button buttonTitle={'Login'} onPressedAction={this.onLoginPress.bind(this)}/>
                        
                        
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

function mapStateToProps(state){
  console.log(state.auth_login);
  return {
    email: state.auth_login.email,
    password: state.auth_login.password
  };
}


export default connect(mapStateToProps, { handleLoginForm })(Login);