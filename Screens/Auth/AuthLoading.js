import React, { Component } from "react";
import { 
    View,
    Text,
    StatusBar,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import auth from '@react-native-firebase/auth'


export default class AuthLoadingScreen extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // FCheck if user is already loggedin or not then navigate to our appropriate place with userData object
    _bootstrapAsync = async () => {

        auth().onAuthStateChanged(async user => {

            if(user){
                await AsyncStorage.setItem("userData", JSON.stringify(user))
                this.props.navigation.navigate('App')
            }else{
                this.props.navigation.navigate('Auth')

            }

        })

    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
