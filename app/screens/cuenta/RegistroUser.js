import React from "react";
import {Style} from "react";
import {StyleSheet, View, Text, Image} from "react-native";

import RegisterForm from "../../components/Account/RegisterForm";

export default function Register() {

    return(
        <View>
            <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../../../assets/img/Pinmy-logo.png')}
            >

            </Image>
            <View style={styles.viewContainer}>
            <RegisterForm/>
            </View>

        </View>
    )   
}
const style = StyleSheet.create({





});
const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20,

    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40,
    },

    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,

    },
    btnRegister:{
        color: "#cc043c"
    },
    divider:{
        backgroundColor:"#cc043c" ,
        margin: 40,

    },
});