import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'


import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth'


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
           userData: {}
        };


        // updating userData state with the asyncStorage userdata
        this.retrieveItem("userData").then((data) => {

            this.setState({ userData: data });

        });
    }



    //converting the AsyncStorage stringfy json from Authloading screen back to proper json object 
    async retrieveItem(key) {
        try {
            const retrievedItem = await AsyncStorage.getItem(key);
            const item = JSON.parse(retrievedItem);
            return item;
        } catch (error) {
            console.log(error.message);
        }
        return
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 22 }}> Welcome {this.state.userData.email}</Text>
                <Button title="Click to sign out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _signOutAsync = async () => {
        await auth().signOut();

        await AsyncStorage.clear();


        //this.setState({ userData: {} });  yehh check maarna hy baad mei


        
        this.props.navigation.navigate('AuthLoading');

    };


}


class SettingsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Settings</Text>
            </View>
        )
    }

}

const LoggedInStack = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: "Home",
                drawerIcon: ({ tintColor }) => (
                    <Icon name="ios-home" size={24} style={{ color: tintColor }} />
                ),
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                drawerLabel: "Settings",
                drawerIcon: ({ tintColor }) => (
                    <Icon name="ios-settings" size={24} style={{ color: tintColor }} />
                ),
            }
        },

    },
    {
        initialRouteName: 'Home',
    },
)

LoggedInStack.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];

    // You can do whatever you like here to pick the title based on the route name
    const headerTitle = routeName;

    return {
        headerTitle,
    };
};



const AppStack = createStackNavigator({

    Home: {

        screen: LoggedInStack,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
            >
                <Icon name="ios-menu" size={28} style={{ marginLeft: 12 }} />
            </TouchableOpacity>
        })

    }

});



export default AppStack;
