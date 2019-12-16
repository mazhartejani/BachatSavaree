import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


import LoginScreen from "./Login";
import RegisterScreen from "./Register";


import { createStackNavigator } from 'react-navigation-stack'

const AuthStack = createStackNavigator({ 
    Login: LoginScreen,
    Register: RegisterScreen 
});

export default AuthStack;






// class LoginRegister extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>LoginRegister</Text>
//             </View>
//         );
//     }
// }
// export default LoginRegister;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });