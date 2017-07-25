import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { handleLoginForm, validateLoginCredential, getUserDetail } from './../actions/Login';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import Input from './../common/Input';
import Button from './../common/Button';
import globalcss from './../../assets/css/globalcss';

class Login extends Component {

    constructor(props){
      super(props);
    }

   componentWillReceiveProps(nextProps){
     if (nextProps.err != null){
        Alert.alert(
          'Error',
          nextProps.err
        );
      }// else if(nextProps.success) {
          //  console.log(nextProps);
          //const userDetail = this.props.getUserDetail({token: nextProps.token});
          //this.props.navigation.navigate('Dashboard');
    //  }
   }

  onLoginPress(){
    if (this.props.email == "" || this.props.password == ""){
          Alert.alert(
            'Missing value',
            'All fields are required'
          );
    } else {
      const user = {
        email: this.props.email,
        password: this.props.password
      }
      this.props.validateLoginCredential(user);
    }
  }


  showEitherButtonOrSpinner(){
    if (this.props.loading){
      return <ActivityIndicator size={'small'}/>;
    }
    return <Button buttonTitle={'Login'} onPressedAction={this.onLoginPress.bind(this)}/>;
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


                      {this.showEitherButtonOrSpinner()}


                          <View style={styles.linkToRegister}>
                            <Text style={styles.standardText}>{'Dont have an account? '}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                              <Text style={styles.standardText}>{'Click here to register'}</Text>
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
     color: '#605a5a',
     fontSize: 15
  }

});

function mapStateToProps(state, props){
  console.log(state);
  //console.log(props);
  return {
      email: state.auth_login.email,
      password: state.auth_login.password,
      success: state.auth_login.success,
      token: state.auth_login.token,
      loading: state.auth_login.loading,
      err: state.auth_login.err
  };
}


export default connect(mapStateToProps, { handleLoginForm, validateLoginCredential, getUserDetail })(Login);
