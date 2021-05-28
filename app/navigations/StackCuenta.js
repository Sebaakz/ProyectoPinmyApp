import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Cuentas from '../screens/cuenta/cuenta';

const Stack = createStackNavigator();

export default function cuentaStack(){

    return(
        <Stack.Navigator>
        <Stack.Screen
        name = "Cuentas"
        component={Cuentas}
        options={{title: "Cuenta de usuario"}}/>
        </Stack.Navigator>
    )

}