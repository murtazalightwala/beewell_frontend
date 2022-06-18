import React from 'react';
import {TouchableOpacity, Text, TextInput, View, Alert } from 'react-native';
import styles from './styles.js';



class MedicalDetailsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blood_group : '',
            height : '',
            weight : '',
            blood_pressure : '',
            allergies : '',
            sugar_level : '',
            routine_medications : '',
            surgical_history : '',
            other_details : '',
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

    change_blood_group = async function(text) {
        await this.setState({blood_group: text})
    }
    change_height = async function(text) {
        await this.setState({height: text})
    }
    change_weight = async function(text) {
        await this.setState({weight: text})
    }
    change_blood_pressure = async function(text) {
        await this.setState({blood_pressure: text})
    }
    change_allergies = async function(text) {
        await this.setState({allergies: text})
    }
    change_sugar_level = async function(text) {
        await this.setState({sugar_level: text})
    }
    change_routine_medications = async function(text) {
        await this.setState({routine_medications: text})
    }
    change_surgical_history = async function(text) {
        await this.setState({surgical_history: text})
    }
    change_other_details = async function(text) {
        await this.setState({other_details: text})
    }


    next_press() {
        step3_pass = {}
        Object.assign(step3_pass, this.props.route.params)
        Object.assign(step3_pass ,this.state)
        Alert.alert(JSON.stringify(step3_pass))
        this.props.navigation.navigate('Emergency Contact',step3_pass);
    }

    prev_press(){
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
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Height' value = {this.state.height} onChangeText = {this.change_height} />
            </View>
            <View style = {{
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Text style = {styles.SignUpFormText}>Weight</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Weight' value = {this.state.weight} onChangeText = {this.change_weight} />

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
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Blood Group' value = {this.state.blood_group} onChangeText = {this.change_blood_group}/>
            </View>
            <View style = {{
            width: '45%',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Text style = {styles.SignUpFormText}>Blood Pressure</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Blood Pressure' value = {this.state.blood_pressure} onChangeText = {this.change_blood_pressure} />

            </View>
        </View>
        
        
        
        <Text style = {styles.SignUpFormText}>Allergies</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Please mention Allergies' value = {this.state.allergies} onChangeText = {this.change_allergies}/>
        <Text style = {styles.SignUpFormText}>Sugar Level</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter your sugar level' value = {this.state.sugar_level} onChangeText = {this.change_sugar_level} />
        <Text style = {styles.SignUpFormText}>Routine Medications</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter Routine Medications' value = {this.state.routine_medications} onChangeText = {this.change_routine_medications} />
        <Text style = {styles.SignUpFormText}>Surgical History</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Enter your Surgical History' value = {this.state.surgical_history} onChangeText = {this.change_surgical_history}/>
        <Text style = {styles.SignUpFormText}>Other Details</Text>
        <TextInput style = {styles.SignUpFormTextInput} placeholder = 'Please mention anything not covered in previous headings' value = {this.state.other_details} onChangeText = {this.change_other_details} />
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
