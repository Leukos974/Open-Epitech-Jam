import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ApplicationCamera } from './Camera.js'
let test = 0

export function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Open the jam !</Text>
            <TouchableOpacity onPress={() => console.log("Hello world !")}>
                <Image source={require('../assets/jam.jpg')} style={{ width: 200, height: 200 }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
    },
});