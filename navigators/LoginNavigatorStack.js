import React from 'react';
import {Hives, SignIn, SignUp, GeneralInfoView, MedicalDetailsView, EmergencyContactView, IsinHealthCareView }  from '../screens/screens_index.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



 function LoginNavigatorStack() {
    return ( 
    <Stack.Navigator initialRouteName = 'SignIn' screenOptions = {{headerShown : false}}>       
    <Stack.Screen name = 'Sign In' component = {SignIn} />
    <Stack.Screen name = 'Hives' component = {Hives} />
    <Stack.Screen name = 'General Info' component = {GeneralInfoView} />
    <Stack.Screen name = 'Medical Details' component = {MedicalDetailsView} />
    <Stack.Screen name = 'Emergency Contact' component = {EmergencyContactView} />
    <Stack.Screen name = 'Is in Healthcare' component = {IsinHealthCareView} />


    </Stack.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default LoginNavigatorStack ; 