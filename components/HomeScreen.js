import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
let test = 0

export function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Jam lootbox here</Text>
            <Button
            title='Click me'
            onPress={() => {
                test += 1
                alert(test)
            }}
            ></Button>
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