import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {Input, Icon, Button} from "react-native-elements";

export default function RegisterForm() {
    return(
        <View style={styles.FormContainer}>
            <Input
            placeholder="Nombre"
            containerStyle={styles.inputForm}
            />
            <Input
            placeholder="Apellido"
            containerStyle={styles.inputForm}
            />
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
            <Input
            placeholder="Repetir contraseña"
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