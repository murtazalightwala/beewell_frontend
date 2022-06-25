import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { signUp } from '../Utils/callAPI.js';
import styles from './styles.js';


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            email : "",
            password : "",
            password2 : "",
        }

        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changePassword2 = this.changePassword2.bind(this);
        this.submit_press = this.submit_press.bind(this);
        this.prev_press = this.prev_press.bind(this);
    }
    

changeUsername = async function (text) {
    await this.setState({username: text});
};

changeEmail = async function (text) {
    await this.setState({email: text});
};

changePassword = async function (text) {
    await  this.setState({password: text});
};

changePassword2 = async function (text) {
    await this.setState({password2: text});
};

submit_press(){
    form_data = {}
          Object.assign(form_data, this.props.route.params)
          Object.assign(form_data, this.state)
          form_data['dob'] = form_data['dob'].toLocaleDateString()
          alert(JSON.stringify(form_data))
          signUp(form_data, (bool, data) => {
              if(bool){
            console.log(data)
            AsyncStorage.setItem(
                    'token',
                    data.token
                  ).then();
             AsyncStorage.setItem(
                    'user',
                    form_data.username
                  ).then();
        
        }
        else alert(data)
                })
        
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
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Please Enter your Username' value = {this.state.username} onChangeText = {this.changeUsername} />
        <Text style = {styles.SignUpFormText}>E-mail</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter email' value = {this.state.email} onChangeText = {this.changeEmail}/>
        <Text style = {styles.SignUpFormText}>Password</Text>
        <TextInput secureTextEntry = {true} style = {styles.SignUpFormTextInput} placeholder = 'Enter password' value = {this.state.password1} onChangeText = {this.changePassword}/>
        <Text style = {styles.SignUpFormText}>Retype Password</Text>
        <TextInput secureTextEntry = {true} style = {styles.SignUpFormTextInput} placeholder = 'Re-enter password' value = {this.state.password2} onChangeText = {this.changePassword2}/>
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
