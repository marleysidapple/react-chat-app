import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/Login';
import Register from './components/Register';
import globalcss from './../assets/css/globalcss';


class RouterComponent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Router>
				<Scene key="auth" style={globalcss.sceneWrapper}>
	 				<Scene key="login" component={Login} title={'Please Login'} initial/>
	 				<Scene key="register" component={Register} title={'Please Register'}/>
	 			</Scene>
			</Router>
		);
	}

}

export default RouterComponent;