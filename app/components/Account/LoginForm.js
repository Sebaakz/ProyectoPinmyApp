import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {Input, Icon, Button} from "react-native-elements";

export default function LoginForm() {
    return(
        <View style={styles.FormContainer}>
            <Input
            placeholder="correo electronico"
            containerStyle={styles.inputForm}
            />
            <Input
            placeholder="contraseña"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={true}
            />
            <Button
                title= "confirmar"
                containerStyle={styles.inputForm}
                />
        </View>

    )
}
const styles = StyleSheet.create({

    FormContainer:{
        // flex: 1,
        // alignItems:"center",
        // justifyContent:"center",
        marginTop: 30,
    },
    inputForm:{
        width:"100%",
        marginTop:20,
    },  




});