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




class Login extends Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    state = { email: '', password: '', errorMessage: null }

    _signInAsync = async () => {
        const { email, password } = this.state
        
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('AuthLoading'))
            .catch(error => alert(error.message))
    };



    render() {
        return (
            <View style={styles.mainView}>

                
                {/* <Image style={styles.logoPic}
                    source={require('../images/logo.png')}
                /> */}

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
                        secureTextEntry={true}
                        style={styles.inputField}

                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}

                    />
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={this._signInAsync}>

                    <Text style={styles.ButtonText}> LOGIN </Text>
                </TouchableOpacity>


                
                <View style={{width:300}}>
                    <TouchableOpacity
                        style={styles.registrationButton}
                        onPress={() => this.props.navigation.navigate('Register')}

                    >





                        <Text style={{fontSize:18}}>
                            Haven't an Account?{"\n"}
                            Create Here
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

export default Login;

