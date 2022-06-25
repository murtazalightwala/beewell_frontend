import React from 'react';
import {Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles.js';



class IsinHealthCareView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_in_healthcare : "",
            healthcare_catagory : "",
            

        }
        this.changeIsInHealthCare = this.changeIsInHealthCare.bind(this)
        this.changeHealthCareCatagory = this.changeHealthCareCatagory.bind(this)
        this.next_press = this.next_press.bind(this);
        this.prev_press = this.prev_press.bind(this);

    }
    changeIsInHealthCare = async function (text) {
        if (text.toLowerCase() === "yes"){
            let bool = true;
        }
        else{
            bool = false;
        }
        await this.setState({is_in_healthcare: bool});
      };
      changeHealthCareCatagory = async function (text) {
        await this.setState({healthcare_catagory: text});
      };
    
      next_press() {
          form_data = {}
          Object.assign(form_data, this.props.route.params)
          Object.assign(form_data, this.state)
          Alert.alert(JSON.stringify(form_data))
        this.props.navigation.navigate('Register User', form_data);
    }

    prev_press(){
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
