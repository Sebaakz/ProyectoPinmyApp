import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigations/Navigation'
import ViewsAsMarkers from './app/screens/locales';
import {firebaseApp} from './app/utils/firebase'


export default function App() {


  return (
    <Navigation/>
  );
}

