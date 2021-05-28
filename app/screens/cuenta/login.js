import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import {View, Text} from "react-native";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import {Register} from "./RegistroUser"
import LoginForm from "../../components/Account/LoginForm";


export default function Login(){
    return(

        <ScrollView>
            <Image
            source={require("../../../assets/img/Pinmy-logo.png")}
            resizeMode="contain"
            style={styles.logo}>
            </Image>
            <View style={styles.viewContainer}>
            <LoginForm/>   
            <CreateAccount/>
            </View>

            <Divider style={styles.divider}/>
            <Text>Social Login</Text>
        </ScrollView>
    )
}

function CreateAccount() {
    const navigation = useNavigation();

    return(
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta?{" "}
            <Text style={styles.btnRegister} 
            onPress={()=> navigation.navigate("Register")}
            >
                Regístrate
            </Text>
        </Text>

    );
    
}

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