import * as React from 'react';
import { Text, View, TouchableHighlight, Dimensions, StyleSheet, Image } from 'react-native';
import UploadImage from './UploadImage.js';

export function SettingsScreen() {
    return (
        <View style={styles.settingsView}>
            <UploadImage />
            <Text style={
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }>About me</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        backgroundColor: '#f00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
});