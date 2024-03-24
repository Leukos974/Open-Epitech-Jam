import * as React from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView, Image} from 'react-native';

export function FeedScreen() {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Post name="Bonjour"/>
        <Post name="Hello"/>
        <Post name="Ola"/>
        <Post name="Bonjour"/>
        <Post name="Hello"/>
        <Post name="Hello"/>
        <Post name="Ola"/>
        <Post name="Bonjour"/>
        <Post name="Hello"/>
        <Post name="Ola"/>
        <Post name="Bonjour"/>
      </ScrollView>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Type here..."
        />
    </View>
  );
}

export const Post = props => {
  return (
    <View style={styles.post}>
      <ProfilePic/>
      <Comment name={props.name}/>
    </View>
  )
}

export const Comment = props => {
  return (
    <View>
      <Text style={styles.comment}>
        Content:{"\n"}{props.name}
      </Text>
    </View>
  )
}

export const ProfilePic = props => {
  return (
    <View>
      <Image style={styles.profile} source={require('../resources/default_pfp_beige.jpg')}>
      </Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor : 'Black',
    borderWidth : 1,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  input: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: '80%',
    height: '5%',
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  post: {
    flex: 1,
    flexDirection: 'row',
    height: 65,
    borderWidth: 3,
    borderColor: 'navy',
    borderRadius: 10,
    marginVertical: 12,
    padding: 5,
  },
  profile: {
    marginHorizontal: 12,
    marginTop: 5,
    borderRadius: 25 / 2,
    width: 25,
    height: 25,
  },
  comment: {
    marginTop: 3,
    marginLeft: 5,
    borderLeftWidth: 1,
    borderColor: 'gray',
  },
});
