/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text} from 'react-native';
import {BottomTabBar, TestNavigatorStack}  from './navigators/nav_index.js';
import {NavigationContainer} from '@react-navigation/native';


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          user: null,
      }
  }


render() {
  return   <NavigationContainer >
  <BottomTabBar />
</NavigationContainer>

  }
}

export default App;