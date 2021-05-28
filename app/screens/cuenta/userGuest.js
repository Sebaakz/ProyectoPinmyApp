import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import Login  from "./login";
export default function UserGuest() {

    const navigation = useNavigation();


    return (
        <ScrollView centerContent={true}>
            <Image style= {styles.image}
            source = {require("../../../assets/img/Pinmy-logo.png")}
            />
            <Text style={styles.tittle}>Bienvenido a Pinmy!</Text>
            <Text style={styles.descripcion}>
             ¿Necesitas saber si tu local de barrio favorito está abierto?¿Te gustaría ir por las clásicas y exquisitas empanadas del local de la esquina, pero no sabes si aún tiene? Con Pinmymap tendrás toda la información de tus almacenes de barrio en la palma de tu mano
                </Text>
            <View>
                <Button
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.viewBtn}
                    title="Ingresa!"
                    onPress={()=> navigation.navigate("Login")}
                    
                />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    ViewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    image:{
        height: 330,
        width: "100%",
        marginBottom: 40,
    },
    tittle: {
        fontWeight:"bold",
        fontSize: 19,
        marginBottom:10,
        textAlign: 'center',

    },
    descripcion:{
        textAlign:"center",
        marginBottom: 20,
        padding: 13,
    },
    btnStyle:{
        backgroundColor:"#cc043c"

    },
    viewBtn:{
        flex:1,
        alignItems:"center",

    },

});
