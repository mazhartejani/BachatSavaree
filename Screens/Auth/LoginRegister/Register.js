import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

import styles from "../../../Styles/LoginRegisterStyles";

import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/FontAwesome5';

import auth from '@react-native-firebase/auth'



class Register extends Component {
    static navigationOptions = {
        title: 'Sign Up',
    };

    state = { email: '', password: '', errorMessage: null }

    _handleSignUp = () => {
        const { email, password } = this.state

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => this.props.navigation.navigate('AuthLoading'))
            .catch(error => alert(error.message))
    }


    render() {
        return (
            <View style={styles.mainView}>


                {/* <Image style={styles.logoPic}
                    source={require('../images/logo.png')}
                /> */}









                <View style={styles.inputView}>
                    <Icons style={styles.inputIcon} name='user' />
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor='white'
                        style={styles.inputField}

                    />
                </View>

                <View style={styles.inputView}>
                    <Icons style={styles.inputIcon} name='envelope' />
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        placeholderTextColor='white'
                        style={styles.inputField}

                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}

                    />
                </View>

                <View style={styles.inputView}>
                    <Icons style={styles.inputIcon} name='lock' />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor='white'
                        autoCapitalize="none"
                        secureTextEntry={true}
                        style={styles.inputField}


                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}

                    />
                </View>


                <View style={styles.inputView}>
                    <Icons style={styles.inputIcon} name='lock' />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        style={styles.inputField}

                    />
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={this._handleSignUp}>

                    <Text style={styles.ButtonText}> REGISTER </Text>
                </TouchableOpacity>


            </View>
        );
    }
}
export default Register;
