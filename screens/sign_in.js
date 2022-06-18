import React from 'react';
import {Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles.js';

class SignIn extends React.Component {

     
    constructor(props) {
        super(props);
        this.state = {

            username : '',
            password : ''
        }
    

    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.signInButtonClick = this.signInButtonClick.bind(this)
    }
    updateUsername(enteredusername) {
        this.setState({username: enteredusername})
    }

    updatePassword(enteredpassword) {
        this.setState({password: enteredpassword})

    }

    signInButtonClick() {
        alert(this.state.username + this.state.password)
        this.props.navigation.navigate('Hives')
    }

    render()
    {
        return <View style = {styles.SignInContainer}>
            <Image source={require('../assets/logo.png')} />
            <Username updateusername = {this.updateUsername} />
            <Password updatepassword = {this.updatePassword} /> 
            <SignInButton buttonclick = {this.signInButtonClick} navigation = {this.props.navigation} />
            <SignUpText navigation = {this.props.navigation}/>

        </View>
    }
}

class Username extends React.Component {

   


constructor(props) {
    super(props);
    this.state = {
        username : '',
    }

    this.onUsernameInput = this.onUsernameInput.bind(this)

}

onUsernameInput = async function(text) {

    await this.setState({username : text})
    this.props.updateusername(this.state.username)
    }


    


render()
{
    return <View style = {styles.signInInput}>
        <FontAwesome
        name = "user-o"
        size = {20}
        />
    <TextInput style = {styles.signInText} placeholder = "Username" value = {this.state.username} onChangeText = {this.onUsernameInput} value = {this.state.username} />
    </View>
}
}

class Password extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password : '',
        }
    
    
    this.onPasswordInput = this.onPasswordInput.bind(this);
    
    
    }
    onPasswordInput = async function(text) {
            await this.setState({password : text})
            this.props.updatepassword(this.state.password)
        
        }
    
    
        
    
    
    render()
    {
        return  <View style = {styles.signInInput} >
          <FontAwesome
        name = "lock"
        size = {20}
        />  
        <TextInput secureTextEntry = {true} placeholder = "Password" onChangeText = {this.onPasswordInput} value = {this.state.password} />
        </View>
    }
    }

class SignInButton extends React.Component {

    constructor(props) {
        super(props);
    

    this.SignInButtonPress = this.SignInButtonPress.bind(this);


    }

    SignInButtonPress() {
        this.props.buttonclick();
        }
    
    
        


    render()
    {
        return <TouchableOpacity activeOpacity = {0.8} style = {styles.SignInButton} onPress = {this.SignInButtonPress}>
            <Text style = {styles.SignInButtonText}>Sign In</Text>
        </TouchableOpacity> 
    }
}


class SignUpText extends React.Component {

    constructor(props) {
        super(props);
    
        this.SignUpButtonPress = this.SignUpButtonPress.bind(this);
    }

    SignUpButtonPress() {

        this.props.navigation.navigate('General Info')
        }


render()
{
    return <View style = {styles.SignUpTextContainer}>
        <Text style = {styles.SignUpText}>Don't have an account?</Text>
    <Text style = {styles.SignUpTextClickable} onPress = {this.SignUpButtonPress}> Sign Up </Text>
    </View>
}
}




export default SignIn;

