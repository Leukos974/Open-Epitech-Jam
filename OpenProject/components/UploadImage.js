import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export default function UploadImage() {
    const [image, setImage] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const cameraStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
                setHasCameraPermission(cameraStatus.status === 'granted');
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    console.log(image);
    return (
        <View style={imageUploaderStyles.container}>
            <Image source={{ uri: image }} style={{ height: '100%', width: '100%' }} />
            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity style={imageUploaderStyles.uploadBtn} onPress={pickImage}>
                    <AntDesign name="upload" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:150,
        width:150,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})