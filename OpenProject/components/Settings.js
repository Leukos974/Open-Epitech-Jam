import * as React from 'react';
import { Text, View, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';

export function SettingsScreen() {
  return (
    <View style={styles.settingsView}>
            <TouchableHighlight
                style={styles.circle}
                onPress={() => alert('Yaay!')}
            >
                <Text> Mom, look, I am a circle! </Text>
            </TouchableHighlight>
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
});