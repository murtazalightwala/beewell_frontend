import React from 'react';
import {TouchableOpacity, Text, TextInput, View, Alert } from 'react-native';
import styles from './styles.js';
import { SignUpFormContext } from '../context/SignUpFormContext.js';




class MedicalDetailsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }

        this.next_press = this.next_press.bind(this);
        this.prev_press = this.prev_press.bind(this);
        this.change_blood_group = this.change_blood_group.bind(this);
        this.change_height = this.change_height.bind(this);
        this.change_weight = this.change_weight.bind(this);
        this.change_blood_pressure = this.change_blood_pressure.bind(this);
        this.change_allergies = this.change_allergies.bind(this);
        this.change_sugar_level = this.change_sugar_level.bind(this);
        this.change_routine_medications = this.change_routine_medications.bind(this);
        this.change_surgical_history = this.change_surgical_history.bind(this);
        this.change_other_details = this.change_other_details.bind(this);
    
    }

    static contextType = SignUpFormContext;

    componentDidMount() {
        let context_profile = this.context.profile;
        console.log(context_profile);
        this.setState({profile: context_profile});
      }

    change_blood_group = async function(text) {
        let new_profile = this.state.profile
        new_profile.blood_group = text
        await this.setState({profile: new_profile});
    }
    change_height = async function(text) {
        let new_profile = this.state.profile
        new_profile.height = text
        await this.setState({profile: new_profile});
    }
    change_weight = async function(text) {
        let new_profile = this.state.profile
        new_profile.weight = text
        await this.setState({profile: new_profile});
        
    }
    change_blood_pressure = async function(text) {
        let new_profile = this.state.profile
    new_profile.blood_pressure = text
    await this.setState({profile: new_profile});
    }
    change_allergies = async function(text) {
        let new_profile = this.state.profile
    new_profile.allergies = text
    await this.setState({profile: new_profile});
    }
    change_sugar_level = async function(text) {
        let new_profile = this.state.profile
    new_profile.sugar_level = text
    await this.setState({profile: new_profile});
    }
    change_routine_medications = async function(text) {
        let new_profile = this.state.profile
    new_profile.routine_medications = text
    await this.setState({profile: new_profile});
    }
    change_surgical_history = async function(text) {
        let new_profile = this.state.profile
    new_profile.surgical_history = text
    await this.setState({profile: new_profile});
    }
    change_other_details = async function(text) {
        let new_profile = this.state.profile
    new_profile.other_details = text
    await this.setState({profile: new_profile});
    }


    next_press() {
        this.context.setProfile(this.state.profile);
        this.props.navigation.navigate('Emergency Contact');
    }

    prev_press(){
        this.context.setProfile(this.state.profile);
        this.props.navigation.navigate('General Info');
    }
    

render()
{
    return  <View>
    <View style = {styles.SignUpFormContainer}>
        <View style = {{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }}>
            <View style = {{
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Text style = {styles.SignUpFormText}>Height</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Height' value = {this.state.profile.height} onChangeText = {this.change_height} />
            </View>
            <View style = {{
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Text style = {styles.SignUpFormText}>Weight</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Weight' value = {this.state.profile.weight} onChangeText = {this.change_weight} />

            </View>
        </View>
        <View style = {{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }}>
            <View style = {{
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Text style = {styles.SignUpFormText}>Blood Group</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Blood Group' value = {this.state.profile.blood_group} onChangeText = {this.change_blood_group}/>
            </View>
            <View style = {{
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Text style = {styles.SignUpFormText}>Blood Pressure</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Blood Pressure' value = {this.state.profile.blood_pressure} onChangeText = {this.change_blood_pressure} />

            </View>
        </View>
        
        
        
        <Text style = {styles.SignUpFormText}>Allergies</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Please mention Allergies' value = {this.state.profile.allergies} onChangeText = {this.change_allergies}/>
        <Text style = {styles.SignUpFormText}>Sugar Level</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter your sugar level' value = {this.state.profile.sugar_level} onChangeText = {this.change_sugar_level} />
        <Text style = {styles.SignUpFormText}>Routine Medications</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Routine Medications' value = {this.state.profile.routine_medications} onChangeText = {this.change_routine_medications} />
        <Text style = {styles.SignUpFormText}>Surgical History</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter your Surgical History' value = {this.state.profile.surgical_history} onChangeText = {this.change_surgical_history}/>
        <Text style = {styles.SignUpFormText}>Other Details</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Please mention anything not covered in previous headings' value = {this.state.profile.other_details} onChangeText = {this.change_other_details} />
        </ View>

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

export default MedicalDetailsView;
