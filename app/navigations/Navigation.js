import React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
console.disableYellowBox = true;

import LocalesStack from './StackLocales'
import cuentaStack from './/StackCuenta'
import FavoritosStack from './StackFavoritos'
import Favoritos from '../screens/favoritos'

const Tab = createBottomTabNavigator();


export default function Navigation(){

return(
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Locales"
        tabBarOptions={{
            inactiveTintColor: "#e46424",
            activeTintColor: "#fcc404"
            
        }}
        screenOptions={({route}) => ({
            tabBarIcon:({color})=>screenOptions(route, color)
        })}
        >
        
            <Tab.Screen name="Locales" 
            component={LocalesStack}
            options={{ title:"Locales"}}
            
            />
            <Tab.Screen name="Cuenta" 
            component={cuentaStack}
            options={{ title:"Cuenta"}}
            />
        </Tab.Navigator>
    </NavigationContainer>

)


}


function screenOptions(route, color){
    let iconName;
    switch(route.name){
        case "Locales":
        iconName = "compass-outline"
        break;

        case "Cuenta":
        iconName = "home-outline"
        break;
        default:
            break;
    }
    return(
        <Icon type="material-community" name={iconName} size={22} color = {color}/>

    )


}