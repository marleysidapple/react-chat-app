import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Dashboard from './components/Dashboard';
import Friends from './components/Friends';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';


import globalcss from './../assets/css/globalcss';


class RouterComponent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Router sceneStyle={globalcss.sceneWrapper}>
				<Scene key="root">
					<Scene key="landing" component={Landing} hideNavBar navigationBarStyle={globalcss.navStyle} initial/>
	 				<Scene key="login" component={Login} title={'Please Login'}/>
	 				<Scene key="register" component={Register} title={'Please Register'}/>
					<Scene key="dashboard" sceneStyle={globalcss.innerWrapper} component={Dashboard} title={'Chats'} />		
					<Scene key="friends" component={Friends} title={'Friend List'}/>	
			 	</Scene>	
			</Router>
		);
	}

}

// <Scene key="protected">
	 			// 	<Scene key="dashboard" component={Dashboard} title={'Some description'} />	
	 			// </Scene>

export default RouterComponent;