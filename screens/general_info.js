import React from 'react';
import {TouchableOpacity, Text, TextInput, View, Alert, Modal} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import styles from './styles.js';
import { SignUpFormContext } from '../context/SignUpFormContext.js';

class GeneralInfoView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    profile: {"dob": new Date()},
    datepicker_visible: false
    };
    
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeDob = this.changeDob.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeRelationshipStatus = this.changeRelationshipStatus.bind(this);
    this.changeCountChildren = this.changeCountChildren.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeProfession = this.changeProfession.bind(this);
    this.next_press = this.next_press.bind(this);
	  this.toggle_modal = this.toggle_modal.bind(this);
  }

  static contextType = SignUpFormContext;

    componentDidMount() {
      let context_profile = this.context.profile;
      console.log(context_profile);
      this.setState({profile: context_profile});
    }


  changeFirstName = async function (text) {
    let new_profile = this.state.profile
    new_profile.first_name = text
    await this.setState({profile: new_profile});
  };

  changeLastName = async function (text) {
    let new_profile = this.state.profile
    new_profile.last_name = text
    await this.setState({profile: new_profile});
  };
  changeDob = async function (text) {
    let new_profile = this.state.profile
    new_profile.dob = text
    await this.setState({profile: new_profile});
  };

  changeGender = async function (text, index) {
    let new_profile = this.state.profile
    new_profile.gender = text
    await this.setState({profile: new_profile});
  };

  changeRelationshipStatus = async function (text) {
    let new_profile = this.state.profile
    new_profile.relationship_status = text
    await this.setState({profile: new_profile});
  };

  changeCountChildren = async function (text) {
    let new_profile = this.state.profile
    new_profile.children = text
    await this.setState({profile: new_profile});
  };

  changeAddress = async function (text) {
    let new_profile = this.state.profile
    new_profile.address = text
    await this.setState({profile: new_profile});
    };

  changeProfession = async function (text) {
    let new_profile = this.state.profile
    new_profile.profession = text
    await this.setState({profile: new_profile});
  };

  next_press() {
    this.context.setProfile(this.state.profile);
    this.props.navigation.navigate('Medical Details');
  }

  toggle_modal() {
	  this.setState({datepicker_visible: !this.state.datepicker_visible})
  }

  render() {
    return (
      <View>
				  <Modal style = {styles.DatePicker}
				  animationType="slide"
				  transparent={false}
				  visible={this.state.datepicker_visible}
				  >
              <DatePicker
                style={styles.DateInput}
                mode="date"
                date={this.state.profile.dob}
                onDateChange={this.changeDob}
              />
			  <TouchableOpacity 
			  style = {styles.DatePickerClose}
			  onPress = {this.toggle_modal}
			  ><Text style={styles.DatePickerCloseText}>Close</Text></TouchableOpacity>
			  </Modal>

        <View style={styles.SignUpFormContainer}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                width: '45%',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text style={styles.SignUpFormText}>First Name</Text>
              <TextInput
                style={styles.SignUpFormTextInput}
                placeholder="Enter First Name"
                value={this.state.profile.first_name}
                onChangeText={this.changeFirstName}
              />
            </View>
            <View
              style={{
                width: '45%',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text style={styles.SignUpFormText}>Last Name</Text>
              <TextInput
                style={styles.SignUpFormTextInput}
                placeholder="Enter Last Name"
                value={this.state.profile.last_name}
                onChangeText={this.changeLastName}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                width: '45%',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text style={styles.SignUpFormText}>Date of birth</Text>
			  <TextInput
                style={styles.SignUpFormTextInput}
                value={this.state.profile.dob.toDateString()}
				onPressIn={this.toggle_modal}
              />
			  
            </View>
            <View
              style={{
                width: '45%',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text style={styles.SignUpFormText}>Gender</Text>

              <Picker style = {styles.GenderPicker}
                selectedValue={this.state.profile.gender}
                onValueChange={this.changeGender}>
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker>
            </View>
          </View>
          <Text style={styles.SignUpFormText}>Relationship Status</Text>
          <TextInput
            style={styles.SignUpFormTextInput}
            placeholder="Please enter your relationship status"
            value={this.state.relationship_status}
            onChangeText={this.changeRelationshipStatus}
          />
          <Text style={styles.SignUpFormText}>Children</Text>
          <TextInput
            style={styles.SignUpFormTextInput}
            placeholder="Enter Number of children"
            value={this.state.profile.children}
            onChangeText={this.changeCountChildren}
          />
          <Text style={styles.SignUpFormText}>Address</Text>
          <TextInput
            style={styles.SignUpFormTextInput}
            placeholder="Enter your Address"
            value={this.state.profile.address}
            onChangeText={this.changeAddress}
          />
          <Text style={styles.SignUpFormText}>Profession</Text>
          <TextInput
            style={styles.SignUpFormTextInput}
            placeholder="Enter your Profession"
            value={this.state.profile.profession}
            onChangeText={this.changeProfession}
          />
        </View>

        <View style={styles.SignUpNavigationContainer}>
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.NextButton}
              onPress={this.next_press}>
              <Text style={styles.SignInButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
          </View>
        </View>
      </View>
    );
  }
}

export default GeneralInfoView;