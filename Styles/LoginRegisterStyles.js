import {
    StyleSheet
} from "react-native"

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    logoPic: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 150,
        width: 190,
        marginBottom: 70
        
    },

    inputView: {
        flexDirection: 'row',
        width: 300, 
        backgroundColor: '#4991de',
        marginBottom: 10,


    },
    inputIcon:{
        fontSize: 25,
        padding: 10,
        paddingRight:5,
        color: 'white'

    },
    inputField: {
        fontSize: 20,
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft:0,
        color: 'white',
    },

    loginButton: {
        marginTop: 20,
        alignItems: 'center', 
        backgroundColor: 'green',
        color: 'white',
        width: 300,
        paddingTop: 10,
        paddingBottom: 10   
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    registrationButton: {
        alignSelf: "flex-start",
        paddingTop: 10,
        paddingBottom: 10  
    }

});

export default styles;