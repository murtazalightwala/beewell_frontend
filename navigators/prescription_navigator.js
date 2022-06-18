import React from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from '../screens/styles.js';


const PrescriptionStack = createNativeStackNavigator();

export default function PrescriptionNavigator() {
    return (
    <PrescriptionStack.Navigator initialRouteName = 'Prescription Home' screenOptions = {{headerShown : false}}>       
    <PrescriptionStack.Screen name = 'Prescription Home' component = {PrescriptionHome} />
    <PrescriptionStack.Screen name = 'OrderChoiceView' component = {OrderChoiceView} />
    <PrescriptionStack.Screen name = 'PrescriptionView' component = {PrescriptionView} />
    <PrescriptionStack.Screen name = 'OfflineOrderView' component = {OfflineOrderView} />
    <PrescriptionStack.Screen name = 'PharmacyOrderView' component = {PharmacyOrderView} />


    </PrescriptionStack.Navigator>
    );
}

class PrescriptionHome extends React.Component {
    constructor(props) {
        super(props);
        

    this.state = {
    li : [
            {
                "doctor_photo": "https://storage.needpix.com/rsynced_images/tile-214366_1280.jpg",
                "doctor_name": "Doctor1",
                "date_of_prescription": "date_op1",
                "mode":"on clinic",
                "details": "clinic Address",
                "prescription":[ {
                    "drug_name": "Drug1",
                    "count": "1",
                    "daily_frequency":"3",
                    "duration": "7",
                },
                {
                    "drug_name": "Drug2",
                    "count": "3",
                    "daily_frequency":"2",
                    "duration": "7",
                },
                {
                    "drug_name": "Drug3",
                    "count": "1",
                    "daily_frequency":"whenever it pains",
                    "duration": "7",
                }]

                },
                {
                    "doctor_photo": "https://cdn1.iconfinder.com/data/icons/medical-services-3/500/Doctor-26-1024.png",
                    "doctor_name": "Doctor2",
                    "date_of_prescription": "date_op2",
                    "mode":"on clinic",
                    "details": "online consultation",
                    "prescription": [{
                        "drug_name": "Drug1",
                        "count": "1",
                        "daily_frequency":"3",
                        "duration": "7",
                    },
                    {
                        "drug_name": "Drug2",
                        "count": "3",
                        "daily_frequency":"2",
                        "duration": "7",
                    },
                    {
                        "drug_name": "Drug3",
                        "count": "1",
                        "daily_frequency":"whenever it pains",
                        "duration": "7",
                    }]
    
                    }

            
        ],
    
    }

    


}


    render()
    {
        return  <SafeAreaView style={styles.HomeContainer}>
        <FlatList
          data={this.state.li}
          renderItem={({ item, index })=>(
              <PrescriptionTile
            style = {styles.PrescriptionTile} 
            prescription = {item}
            key = {index}
            nav = {this.props.navigation}
            />
          )}
          keyExtractor={(item) => item.doctor_name}
        />
      </SafeAreaView>
    }
}

class PrescriptionTile extends React.Component {
    constructor(props) {
        super(props);
        this.prescription_tile_click = this.prescription_tile_click.bind(this);
    }

    prescription_tile_click() {
        this.props.nav.navigate('OrderChoiceView', this.props.prescription);
    }

   
    render()
    {
        return <TouchableOpacity
         style = {styles.PrescriptionTile}
         onPress={this.prescription_tile_click}
         > 
            <Image 
            style = {styles.DoctorPhoto}
            source={{uri:this.props.prescription.doctor_photo}}
            resizeMode = "stretch"
            />
            <View style = {styles.DoctorTile}>
            <View style = {styles.DoctorInfo}>
            <Text style = {styles.PrescriptionTileFieldNames}>Doctor Name </Text>
            <Text style = {styles.PrescriptionTileValues}>{this.props.prescription.doctor_name} </Text>
            </View>
            <View style = {styles.DoctorInfo}>
            <Text style = {styles.PrescriptionTileFieldNames}>Date of Prescription </Text>
            <Text style = {styles.PrescriptionTileValues}>{this.props.prescription.date_of_prescription} </Text>
            </View>
            <View style = {styles.DoctorInfo}>
            <Text style = {styles.PrescriptionTileFieldNames}>Mode </Text>
            <Text style = {styles.PrescriptionTileValues}>{this.props.prescription.mode} </Text>
            </View>
            </View>
        </TouchableOpacity>
    }
}

class OrderChoiceView extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return <View>
            <Text>{String(this.props.route.params.prescription.doctor_name)}</Text>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OnlineOrderView', this.props.prescription)}
            >
                <Text>Order Medicine Online</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OfflineOrderView', this.props.prescription)}

            >
                <Text>Order Medicine Offline</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OrderGenericFormView', this.props.prescription)}

            >
                <Text>Order Generic Form</Text>
            </TouchableOpacity>

   
        </View> 
   
   
    }
   
   
   }

class PrescriptionView extends React.Component {
 constructor(props) {
     super(props);
 }

 render() {
     return <View>
         <Text>{String(this.props.route.params.prescription)}</Text>

     </View> 


 }


}

class OfflineOrderView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            li : [
                {
                    "pharmacy_id":1,
                    "pharmacy_photo":"https://storage.needpix.com/rsynced_images/tile-214366_1280.jpg",
                    "pharmacy_name":"Pharmacy One",
                    "address": "Address1",
                    "reviews": "Re"
                },
                {
                    "pharmacy_id":2,
                    "pharmacy_photo":"https://storage.needpix.com/rsynced_images/tile-214366_1280.jpg",
                    "pharmacy_name":"Pharmacy Two",
                    "address": "Address12",
                    "reviews": "Re"
                },
                {
                    "pharmacy_id":3,
                    "pharmacy_photo":"https://storage.needpix.com/rsynced_images/tile-214366_1280.jpg",
                    "pharmacy_name":"Pharmacy 3",
                    "address": "Address13",
                    "reviews": "Re12312"
                }
            ]
        }
    }

    render() {
        return <SafeAreaView>
            <FlatList
          data={this.state.li}
          renderItem={({ item, index })=>(
              <PharmacyTile
            style = {styles.PrescriptionTile} 
            pharmacy = {item}
            key = {index}
            nav = {this.props.navigation}
            />
          )}
          keyExtractor={(item) => item.pharmacy_id}
        />

        </SafeAreaView>
    }

}

class PharmacyTile extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <TouchableOpacity
        style = {styles.PrescriptionTile}
        onPress={this.pharmacy_tile_click}
        > 
           <Image 
           style = {styles.DoctorPhoto}
           source={{uri:this.props.pharmacy.pharmacy_photo}}
           resizeMode = "stretch"
           />
           <View style = {styles.DoctorTile}>
           <View style = {styles.DoctorInfo}>
           <Text style = {styles.PrescriptionTileFieldNames}>Pharmacy Name </Text>
           <Text style = {styles.PrescriptionTileValues}>{this.props.pharmacy.pharmacy_name} </Text>
           </View>
           <View style = {styles.DoctorInfo}>
           <Text style = {styles.PrescriptionTileFieldNames}>Address </Text>
           <Text style = {styles.PrescriptionTileValues}>{this.props.pharmacy.address} </Text>
           </View>
           <View style = {styles.DoctorInfo}>
           <Text style = {styles.PrescriptionTileFieldNames}>Reviews </Text>
           <Text style = {styles.PrescriptionTileValues}>{this.props.pharmacy.reviews} </Text>
           </View>
           </View>
       </TouchableOpacity>
    }


}

class PharmacyOrderView extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return <View>
            <Image 
           style = {styles.DoctorPhoto}
           source={{uri:this.props.pharmacy_photo}}
           resizeMode = "stretch"
           />
           <Text>{this.props.pharmacy_name}</Text>
        </View>
    }

}


export {PrescriptionHome};

