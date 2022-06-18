import React from 'react';
import {Test, Appointment, Profile}  from '../screens/screens_index.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
  return( 
  <Tab.Navigator screenOptions = {{headerShown : false}}>
        
    <Tab.Screen
     name="Hives" 
     component={Test}
     options={{tabBarIcon: () => 
      <FontAwesome
      name = "home"
      color = "lightgrey"
      size = {40}
      />
    }}
     />

    <Tab.Screen
    name="Appointment"
    component={Appointment} 
    options={{tabBarIcon: () => 
      <FontAwesome
      name = "list"
      color = "lightgrey"
      size = {40}
      />
    }}
    />

    <Tab.Screen 
    name="Profile" 
    component={Profile} 
    options={{tabBarIcon: () => 
      <FontAwesome
      name = "user"
      color = "lightgrey"
      size = {40}
      />
    }}
    />

  </Tab.Navigator>

    )       
};

