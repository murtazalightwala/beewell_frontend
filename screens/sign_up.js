import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles.js';


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : null,
            email : null,
            password : null,
            password2 : null,
        }
        this.submit_press = this.submit_press.bind(this);
        this.prev_press = this.prev_press.bind(this);
    }
    
    submit = async function (data) {
    let response = await fetch('127.0.0.1:8000/patient/sign_up/',{
        method: 'POST',
        body: data
    });
    data = response.body;
    Alert.alert(data)
}

submit_press(){
    form_data = {}
          Object.assign(form_data, this.props.route.params)
          Object.assign(form_data, this.state)
          Alert.alert(JSON.stringify(form_data))
          this.props.navigation.navigate("Sign In", form_data)
}

prev_press(){
    form_data = {}
          Object.assign(form_data, this.props.route.params)
          Object.assign(form_data, this.props.route.params)
          Alert.alert(JSON.stringify(form_data))
          this.props.navigation.navigate("Is in Healthcare")
}


render()
{
    return <View>
    <View style = {styles.SignUpFormContainer}>
        <Text style = {styles.SignUpFormText}>Username</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Please Enter your Username' value = {this.state.username} />
        <Text style = {styles.SignUpFormText}>E-mail</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter email' value = {this.state.email} />
        <Text style = {styles.SignUpFormText}>Password</Text>
        <TextInput secureTextEntry = {true} style = {styles.SignUpFormTextInput} placeholder = 'Enter password' value = {this.state.password1} />
        <Text style = {styles.SignUpFormText}>Retype Password</Text>
        <TextInput secureTextEntry = {true} style = {styles.SignUpFormTextInput} placeholder = 'Re-enter password' value = {this.state.password2} />
        </View>
        <View style = {styles.SignUpNavigationContainer}>
            <View style = {{
                width: '50%',   
                alignItems: 'center', 
                justifyContent: 'center',
        }}>
        <TouchableOpacity activeOpacity = {0.8} style = {styles.NextButton} onPress = {this.submit_press}>
            <Text style = {styles.SignInButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        <View style = {{
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
        <TouchableOpacity activeOpacity = {0.8} style = {styles.PreviousButton} onPress = {this.prev_press}>
            <Text style = {styles.SignInButtonText}>Previous</Text>
        </TouchableOpacity>
        </View>
        </View>

        </ View>
}



}

export default SignUp;
