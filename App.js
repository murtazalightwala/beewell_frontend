/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {BottomTabBar, SignUpNavigatorStack}  from './navigators/nav_index.js';
import {NavigationContainer} from '@react-navigation/native';
import {AsyncStorage} from 'react-native';


async function _getUserItems() {
  let user = await AsyncStorage.getItem("user")
  let token = await AsyncStorage.getItem("token")
  console.log({user, token})
  return {user, token};
}

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        "user": null,
        "token": null
      }
  }

  async update_user_data() {
    let {user, token} = await _getUserItems();
    this.setState({
      "user": user,
      "token": token
    })
  }

render() {
  this.update_user_data()
  return <NavigationContainer >
    { this.state.token === null ? <SignUpNavigatorStack /> : <BottomTabBar /> }
  
</NavigationContainer>

  }
}

export default App;


