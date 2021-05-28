import React from "react";
import {StyleSheet, View,Text, ActivityIndicator} from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
    const {isVisible, text} = props;

    return (
        <Overlay 
        isVisible={isVisible}
        windowBackgroundColor="rgba(0,0,0,0.5)"
        overlayBackgroundColor = "transparent"
        overlayStyle={style.Overlay}
        >
            <View style={style.View}>
                <ActivityIndicator size="large" color="#fcc404" />
                {text&&<Text style={style.text}>{text}</Text>}
            </View>
        </Overlay>

    )
}

const style = StyleSheet.create({
    Overlay:{
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#fcc404",
        borderWidth: 2,
        borderRadius:10,
    },
    View:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",

    },
    text:{
        color: "#fcc404",
        textTransform: "uppercase",
        marginTop:10,


    }


});