import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';


class RouterComponent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Router>
				<Scene key="auth" style={{paddingTop: 65}}>
	 				<Scene key="login" component={Login} title={'Please Login'} />
	 			</Scene>
			</Router>
		);
	}

}

export default RouterComponent;