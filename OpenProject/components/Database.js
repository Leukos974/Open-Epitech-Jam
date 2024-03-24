import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';
import { Network } from 'expo';

export function Database() {
  const [data, setData] = useState([]);
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const localIpAddress = await Network.getIpAddressAsync(
            Network.NetworkType.WIFI
        );
        console.log('Local IP Address:', localIpAddress);
        setIpAddress(localIpAddress);
      } catch (error) {
        console.error('Error fetching local IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`http://${ipAddress}:3000/getData`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    const postData = async () => {
      try {
        const response = await Axios.post(`http://${ipAddress}:3000/postData`, { message: 'test other' });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('There has been a problem with your post operation:', error);
      }
    };

    if (ipAddress) {
      fetchData();
      postData();
    }
  }, [ipAddress]);

  return (
    <View style={styles.container}>
      <Text>Data: {JSON.stringify(data.message)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
