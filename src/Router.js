import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator }  from 'react-navigation';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from './components/Dashboard';
import Friends from './components/Friends';
import Landing from './components/Landing';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import { Icon } from 'react-native-elements';

import globalcss from './../assets/css/globalcss';

const DashboardTabsCollection = TabNavigator({
  Chats: {
    screen: Dashboard,
    navigationOptions: {
    	headerLeft: null,
    	title: 'Chats',
    	tabBarIcon: ({ tintColor }) => <Icon name="textsms" size={25} color={tintColor} />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
    	title: 'Profile',
    	tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={25} color={tintColor} />,
    	headerLeft: null
    }
  },

  Friends: {
    screen: Friends,
    navigationOptions: {
    	title: 'Friends',
    	tabBarIcon: ({ tintColor }) => <Icon name="contacts" size={25} color={tintColor} />,
    	headerLeft: null,
      headerRight: <Button title="Add"></Button>,
    }
  },

  Settings: {
    screen: Profile,
    navigationOptions: {
    	title: 'More',
    	tabBarIcon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />,
    	headerLeft: null
    }
  },
});

export const Router = StackNavigator({
  Landing: {
  	screen: Landing,
  	navigationOptions: {
  		header: null,
  	}
  },
  Login: {
  	screen: Login,
  	navigationOptions: {
  		title: 'Login',
  		headerLeft: null,
  	}
  },
  Register: {
  	screen: Register
  },
  Dashboard: {screen: DashboardTabsCollection},
},
{
  initialRouteName: 'Landing',
});




const AppWithNavigationState = ({dispatch, nav}) => (
    <Router
      navigation={addNavigationHelpers({
        dispatch,
        state: nav
      })}
      />
);



const mapStateToProps = (state) => {
  return{
    nav: state.nav
  }
}

export default connect(mapStateToProps)(AppWithNavigationState);
