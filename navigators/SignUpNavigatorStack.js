import React from 'react';
import {GeneralInfoView, MedicalDetailsView, EmergencyContactView, IsinHealthCareView, SignUp, SignIn }  from '../screens/screens_index.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpFormContext } from '../context/SignUpFormContext.js';


 function SignUpNavigatorStack() {
    return ( 
        <SignUpFormContext.Provider>
    <SignUpStack.Navigator initialRouteName = 'Sign In' screenOptions = {{headerShown : false}}>       
    <SignUpStack.Screen name = 'General Info' component = {GeneralInfoView} />
    <SignUpStack.Screen name = 'Medical Details' component = {MedicalDetailsView} />
    <SignUpStack.Screen name = 'Emergency Contact' component = {EmergencyContactView} />
    <SignUpStack.Screen name = 'Is in Healthcare' component = {IsinHealthCareView} />
    <SignUpStack.Screen name = 'Register User' component = {SignUp} />
    <SignUpStack.Screen name = 'Sign In' component = {SignIn} />
    </SignUpStack.Navigator>
    </SignUpFormContext.Provider>
    );
}

const SignUpStack = createNativeStackNavigator();

export default SignUpNavigatorStack ; 