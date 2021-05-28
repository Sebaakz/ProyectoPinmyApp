import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Cuentas from '../screens/cuenta/cuenta';
import Login  from "../screens/cuenta/login";
import Register  from "../screens/cuenta/RegistroUser";

const Stack = createStackNavigator();

export default function cuentaStack(){
    return(
        <Stack.Navigator>
        <Stack.Screen
        name = "Cuentas"
        component={Cuentas}
        options={{title: "Cuenta de usuario"}}/>

        <Stack.Screen
            name="Login"
            component={Login}
            options={{title:"Login"}}
            />
        <Stack.Screen
            name="Register"
            component={Register}
            options={{title:"Registro de usuario"}}
            />

        </Stack.Navigator>
    )

}