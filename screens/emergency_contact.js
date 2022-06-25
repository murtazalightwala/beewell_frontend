import React from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { SignUpFormContext } from '../context/SignUpFormContext.js';
import styles from './styles.js';



class EmergencyContactView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile:{}
            
        }
        this.next_press = this.next_press.bind(this);
        this.prev_press = this.prev_press.bind(this);
        this.change_em_contact_name = this.change_em_contact_name.bind(this);
        this.change_em_phone = this.change_em_phone.bind(this);

    }
    
    static contextType = SignUpFormContext;

    componentDidMount() {
        let context_profile = this.context.profile;
        console.log(context_profile);
        this.setState({profile: context_profile});
      }

    change_em_contact_name = async function(text) {
        let new_profile = this.state.profile
        new_profile.em_contact_name = text
        await this.setState({profile: new_profile});
    }

    change_em_phone = async function(text) {
        let new_profile = this.state.profile
        new_profile.em_phone = text
        await this.setState({profile: new_profile});
    }

    prev_press() {
        this.context.setProfile(this.state.profile);
        this.props.navigation.navigate('Medical Details');
    }

    next_press(){
        this.context.setProfile(this.state.profile);
        this.props.navigation.navigate('Is in Healthcare');
    }  

render()
{
    return <View>
    <View style = {styles.SignUpFormContainer}>
        <Text style = {styles.SignUpFormText}>Emergency Contact Person's Name</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Emergency Contact Name' value = {this.state.profile.em_contact_name} onChangeText = {this.change_em_contact_name} />
        <Text style = {styles.SignUpFormText}>Emergency Contact Person's Phone Number</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Phone Number' value = {this.state.profile.em_phone} onChangeText = {this.change_em_phone} />
        </View>
        <View style = {styles.SignUpNavigationContainer}>
            <View style = {{
                width: '50%',   
                alignItems: 'center', 
                justifyContent: 'center',
        }}>
        <TouchableOpacity activeOpacity = {0.8} style = {styles.NextButton} onPress = {this.next_press}>
            <Text style = {styles.SignInButtonText}>Next</Text>
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
        </View>
}
}

export default EmergencyContactView;
