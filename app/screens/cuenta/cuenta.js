import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import * as firebase from 'firebase';
import UserGuest from './userGuest'
import UserLogged from './userLogged'
import Loading from "../../components/Loading"


export default function Cuentas() {
//creamos una constante que nos indica el esstado del usuario (logeado o no)
const [login, setlogin] = useState(null);
 useEffect(()=> {
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        !user ? setlogin(false) : setlogin(true); 
    });
 }, []);
    if(login === null) return <Loading isVisible={true} text="cargando..."/>;
    return login ? <UserLogged/> : <UserGuest/>; // cargamos el userguest si el no se recupera usuario de la bd
}
