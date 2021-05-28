import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Locales() {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: -33.32928525413892,
        longitude: -70.7511894415532,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker 
        coordinate={{
          latitude: -33.32928525413892,
          longitude: -70.7511894415532,
        }}
        image={require('../../assets/img/Pinmy-logo.png')}
        title="Test Title"
        description="This is the test description"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Almacen "Donde el Pepe"</Text>
              <Text style={styles.stategreen}>abierto</Text> 
              <Text style={styles.secondTittle}>Categorias:</Text>
              <Text>Verduras  abarrotes  papeleria</Text>
              <Text style={styles.secondTittle}>metodos de pago:</Text>
              <Text>efectivo y tarjeta</Text>
              <Text style={styles.secondTittle}>productos populares:</Text>
              <View>
                <Text>Empanadas de pino</Text> 
                <Text style={styles.stateryellow}>queda poco!</Text> 
              </View>

            </View>
            <View style={styles.arrowBorder}/>
            <View style={styles.arrow} />
          </View>
        </Callout>

      </Marker>
      <Marker 
        coordinate={{
          latitude: -33.32900415322751, 
          longitude: -70.74900312970779,
        }}
        image={require('../../assets/img/Pinmy-logo.png')}
        title="Test Title"
        description="This is the test description"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>verduleria "Pastores"</Text>
              <Text style={styles.stateryellow}>Por cerrar</Text> 
              <Text style={styles.secondTittle}>Categorias:</Text>
              <Text>Verduras  abarrotes  papeleria</Text>
              <Text style={styles.secondTittle}>metodos de pago:</Text>
              <Text>Solo efectivo</Text>
              <Text style={styles.secondTittle}>productos populares:</Text>
              <View>
                <Text>Palta Hass</Text> 
                <Text style={styles.statered}>producto agotado :( </Text> 
              </View>

            </View>
            <View style={styles.arrowBorder}/>
            <View style={styles.arrow} />
          </View>
        </Callout>

      </Marker>
      <Marker 
        coordinate={{
          latitude: -33.330515440685524,  
          longitude: -70.75006857802948,
        }}
        image={require('../../assets/img/Pinmy-logo.png')}
        title="Test Title"
        description="This is the test description"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>papeleria "valle grande"</Text>
              <Text style={styles.statered}>cerrado</Text> 
              <Text style={styles.secondTittle}>Categorias:</Text>
              <Text>papeleria    limpieza</Text>
              <Text style={styles.secondTittle}>metodos de pago:</Text>
              <Text>efectivo y tarjeta </Text>
            </View>
            <View style={styles.arrowBorder}/>
            <View style={styles.arrow} />
          </View>
        </Callout>

      </Marker>
    </MapView>
);
}

const styles = StyleSheet.create({
  map: {
    height: '100%'
  },
  // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 24,
    marginBottom: 10,
  },
  secondTittle: {
    fontSize: 18,
    marginBottom: 5,
  },
  stategreen:{
    fontSize:12,
    borderRadius: 5,
    backgroundColor: '#00AB66',

  },
  statered:{
    fontSize:12,
    borderRadius: 5,
    backgroundColor: '#BD1816',

  },
  stateryellow:{
    fontSize:12,
    borderRadius: 5,
    backgroundColor: '#FFCC00',

  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
});