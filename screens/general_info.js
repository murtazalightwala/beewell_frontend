import React from 'react';
import {TouchableOpacity, Text, TextInput, View, Alert, Modal} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import styles from './styles.js';

class GeneralInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      dob: new Date(),
      gender: 'male',
      relationship_status: '',
      children: '',
      address: '',
      profession: '',
	  datepicker_visible: false,
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

  changeFirstName = async function (text) {
    await this.setState({firstname: text});
  };

  changeLastName = async function (text) {
    await this.setState({lastname: text});
  };
  changeDob = async function (text) {
    await this.setState({dob: text});
  };

  changeGender = async function (text, index) {
    await this.setState({gender: text});
  };

  changeRelationshipStatus = async function (text) {
    await this.setState({relationship_status: text});
  };

  changeCountChildren = async function (text) {
    await this.setState({children: text});
  };

  changeAddress = async function (text) {
    await this.setState({address: text});
  };

  changeProfession = async function (text) {
    await this.setState({profession: text});
  };

  next_press() {
    Alert.alert(JSON.stringify(this.state));
    this.props.navigation.navigate('Medical Details', this.state);
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
                date={this.state.dob}
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
                value={this.state.firstname}
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
                value={this.state.lastname}
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
                value={this.state.dob.toDateString()}
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
                selectedValue={this.state.gender}
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
            value={this.state.children}
            onChangeText={this.changeCountChildren}
          />
          <Text style={styles.SignUpFormText}>Address</Text>
          <TextInput
            style={styles.SignUpFormTextInput}
            placeholder="Enter your Address"
            value={this.state.address}
            onChangeText={this.changeAddress}
          />
          <Text style={styles.SignUpFormText}>Profession</Text>
          <TextInput
            style={styles.SignUpFormTextInput}
            placeholder="Enter your Profession"
            value={this.state.profession}
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