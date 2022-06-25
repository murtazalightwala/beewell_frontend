import React from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { SignUpFormContext } from '../context/SignUpFormContext.js';
import styles from './styles.js';



class IsinHealthCareView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile:{}
            

        }
        this.changeIsInHealthCare = this.changeIsInHealthCare.bind(this)
        this.changeHealthCareCatagory = this.changeHealthCareCatagory.bind(this)
        this.next_press = this.next_press.bind(this);
        this.prev_press = this.prev_press.bind(this);

    }
    
    static contextType = SignUpFormContext;

    componentDidMount() {
        let context_profile = this.context.profile;
        console.log(context_profile);
        this.setState({profile: context_profile});
      }


    changeIsInHealthCare = async function (text) {
        if (text.toLowerCase() === "yes"){
            let bool = true;
        }
        else{
            bool = false;
        }
        let new_profile = this.state.profile
        new_profile.is_in_healthcare = bool
        await this.setState({profile: new_profile});
      };
      changeHealthCareCatagory = async function (text) {
        let new_profile = this.state.profile
        new_profile.healthcare_catagory = text
        await this.setState({profile: new_profile});
      };
    
      next_press() {
        this.context.setProfile(this.state.profile);
        this.props.navigation.navigate('Register User');
    }

    prev_press(){
        this.context.setProfile(this.state.profile);
        this.props.navigation.navigate('Emergency Contact');
    }

render()
{
    return <View>
    <View style = {styles.SignUpFormContainer}>
        <Text style = {styles.SignUpFormText}>Are You A Healthcare Worker?</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Please Enter Yes or No' value = {this.state.is_in_healthcare} onChangeText = {this.changeIsInHealthCare} />
        <Text style = {styles.SignUpFormText}>Please Enter Catagory</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter catagory' value = {this.state.healthcare_catagory} onChangeText = {this.changeHealthCareCatagory} />
        </View>
        <View style = {styles.SignUpNavigationContainer}>
            <View style = {{
                width: '50%',   
                alignItems: 'center', 
                justifyContent: 'center',
        }}>
        <TouchableOpacity activeOpacity = {0.8} style = {styles.NextButton} onPress = {this.next_press}>
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

export default IsinHealthCareView;
