import * as React from 'react'
import Axios from 'axios'
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export function Database(){
    const [data, setData] = React.useState([]);

    const getData = async () => {
        try {
        const response = await Axios.get('http://10.106.0.83:5000/getData')
        console.log(response.data);
        setData(response.data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    const postData = async () => {
        try {
        const response = await Axios.post('http://10.106.0.83:5000/postData', {message: '\\[T]/'})
        console.log(response.data);
        setData(response.data);
        } catch (error) {
            console.error('There has been a problem with your post operation:', error);
        }
    }

    React.useEffect(()=>{
        postData();
        getData();
    },[]);

    return (
        <View>
            <Text> "test",  {data.message} </Text>
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
