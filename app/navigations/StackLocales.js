import React from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import Locales from '../screens/locales';

const Stack = createStackNavigator();

export default function LocalesStack(){

    return(
        <Stack.Navigator>
        <Stack.Screen
        name = "Locales"
        component={Locales}
        options={{title: "Locales"}}/>
        </Stack.Navigator>
    )

}