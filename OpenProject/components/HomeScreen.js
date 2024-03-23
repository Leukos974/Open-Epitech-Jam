import * as React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

export function HomeScreen() {
    return (
      <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: -20.964885623394416,
        longitude: 55.6592007697144,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    );
  }