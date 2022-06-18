import React from 'react';
import {Test, SignIn}  from '../screens/screens_index.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 function TestNavigatorStack() {
    return ( 
    <SignUpStack.Navigator initialRouteName = 'Test' screenOptions = {{headerShown : false}}>       
    <SignUpStack.Screen name = 'Test' component = {Test} />
    <SignUpStack.Screen name = 'Testy' component = {SignIn} />
    </SignUpStack.Navigator>
    );
}

const SignUpStack = createNativeStackNavigator();

export default TestNavigatorStack ; 