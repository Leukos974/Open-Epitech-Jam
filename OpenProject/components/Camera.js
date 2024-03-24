import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export function ApplicationCamera() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                setImage(photo.uri);
            } catch (error) {
                console.log('Error taking picture', error);
            }
        }
    }

    const saveImage = async () => {
        if (image) {
            try {
                await MediaLibrary.createAssetAsync(image);
                setImage(null);

            } catch (error) {
                console.log('Error saving image', error);
            }
        }
    }

    const retakePicture = () => {
        setImage(null);
    }

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // Picture handling
    return (
        <View style={styles.container}>
            {!image ?
                <Camera
                    ref={cameraRef}
                    style={styles.camera}
                    type={type}
                >
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={takePicture}
                        >
                            <Text style={styles.text}>Take picture</Text>
                        </TouchableOpacity>
                        <Button
                            title="Flip camera"
                            onPress={() => {
                                setType(
                                    type === CameraType.back
                                        ? CameraType.front
                                        : CameraType.back
                                );
                            }}
                        />
                    </View>
                </Camera>
                :
                <View>
                    <Button
                        title="Save image"
                        onPress={saveImage}
                    />
                    <Button
                        title="Retake picture"
                        onPress={retakePicture}
                    />
                    <Image
                        source={{ uri: image }}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: 'white',
    },
});