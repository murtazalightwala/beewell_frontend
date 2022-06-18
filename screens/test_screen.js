import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Text, TextInput, View, Image, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import styles from './styles.js';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {PrescriptionNavigator,} from '../navigators/nav_index.js';



class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return (
        <TopTabBar />
        )
    }
}
  
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

  
    render()
    {
        return <View style = {this.props.style}> 
            <Logo />
            <Search />
            <HamIcon />

        </View>
    }
}

function TopTabBar2() {
    return <Text>This is test</Text>

}

function TopTabBar() {
    return <topTab.Navigator
    style = {styles.HomeTopTab}
    initialRouteName='Home'
    screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 10, color: 'black' },
       
      }} 
     >
    <topTab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
    <topTab.Screen name="Prescription" component={PrescriptionNavigator} options={{ tabBarLabel: 'Prescription' }}/>
    <topTab.Screen name="Reports" component={Reports} options={{ tabBarLabel: 'Reports' }}/>
    <topTab.Screen name="Orders" component={Orders} options={{ tabBarLabel: 'Orders' }}/>
    </topTab.Navigator>

}

const topTab = createMaterialTopTabNavigator();


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return <View> 
            <Text>This is Home</Text>

        </View>
    }
}




class Reports extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return <View> 
            <Text>This is Reports</Text>

        </View>
    }
}
class Orders extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return <View> 
            <Text>This is Orders</Text>

        </View>
    }
}
class HivesBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return <View> 
            <Text>This is Hives Body</Text>

        </View>
    }
}




class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return <Image 
            style = {styles.Logo}
            source = {require('../assets/logo.png')}
            resizeMode = "contain"
            />
    }
}


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
          };

    this.updateSearch = this.updateSearch.bind(this);


          }

          updateSearch = async function (text) {
            await this.setState({search: text });
          };
  

    render()
    {
        return <View
        style = {styles.SearchInput}
        >
            <FontAwesome
        name = "search"
        size = {20}
        />
            <TextInput
            style = {styles.SearchInput}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={this.state.search}
      />
        </View>
        
    }
}
class HamIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render()
    {
        return <FontAwesome
        style = {styles.Ham}
        name = "bars"
        color = "lightgrey"
        size = {40}
        /> 
            
    }
}

export default Test;