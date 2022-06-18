import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text, TextInput, View, Image} from 'react-native';
import styles from './styles';

class Appointment extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return <View style = {styles.HomeContainer}> 
            <Text>Appointments</Text>
        </View>
    }
}

export default Appointment;
