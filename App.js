import { StatusBar } from 'expo-status-bar';
import React, { Fragment, useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import MapView, {Marker} from "react-native-maps"
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location"

export default function App() {
  const [localizacao, setLocalizacao] = useState(null)
  useEffect(() => {
    async function loadInitialPosition() {
    const {granted}  = await requestForegroundPermissionsAsync()  

    if (granted) {
      const {coords} = await getCurrentPositionAsync()
      
      const {latitude, longitude} = coords;

      setlocalizacao({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
      })
    }
  }

  loadInitialPosition()
}, [])
  return (
    <Fragment>

    
      <MapView 
      style={styles.container} 
      initialRegion={localizacao}
      showsUserLocation={true}
      >
      <Marker
      coordinate={{
        latitude:-27.0397683,
        longitude:-48.6553543
      }}
      >
      <Image
      source={{uri:"https://i.pinimg.com/474x/5e/80/69/5e80691e1c5ef0f22cc8ee4fba30b1af.jpg"}}
      style={styles.pin}
      />
      
      <Text>Casa</Text>
      </Marker> 
      <Marker
      coordinate={{
        latitude:-27.0395501,
        longitude:-48.6542650
      }}
      >
      <Image
      source={{uri:"https://i.pinimg.com/474x/5e/80/69/5e80691e1c5ef0f22cc8ee4fba30b1af.jpg"}}
      style={styles.pin}
      />
      
      <Text>Casa</Text>
      </Marker> 
      <Marker
      coordinate={{
        latitude:-27.0396495,
        longitude:-48.6542501
      }}
      >
      <Image
      source={{uri:"https://i.pinimg.com/474x/5e/80/69/5e80691e1c5ef0f22cc8ee4fba30b1af.jpg"}}
      style={styles.pin}
      />
      
      <Text>Casa</Text>
      </Marker> 
      <Marker
      coordinate={{
        latitude:-27.0396452,
        longitude:-48.6575495
      }}
      >
      <Image
      source={{uri:"https://i.pinimg.com/474x/5e/80/69/5e80691e1c5ef0f22cc8ee4fba30b1af.jpg"}}
      style={styles.pin}
      />
      
      <Text>Casa</Text>
      </Marker> 

      </MapView>
      <View style={styles.menu}>
        <Text>Meu app de Mapa</Text>
      </View>
      </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pin :{
    width:20,
    height:20
  },
  menu: {
    position: "absolute",
    top:60,
    left:"10%",
    width:"80%",
    height:60,
    backgroundColor: "#eaea99"

  }
});
