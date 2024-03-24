import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

export function MapScreen() {
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    // Request permission to access location
    (async () => {
      const { status } = await requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Location permission not granted');
        return;
      }

      // Get the user's current location
      const location = await getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      // Set initialRegion to center the map on the user's position
      setInitialRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={initialRegion} // Set initialRegion dynamically
    >
      {/* Optionally, add a Marker at the user's position */}
      {initialRegion && <Marker coordinate={initialRegion} />}
    </MapView>
  );
}
