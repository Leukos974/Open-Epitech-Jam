import * as React from 'react';
import MapView from 'react-native-maps';

export function MapScreen() {
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