import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export function HomeScreen() {
  // Array of challenges
  const challenges = [
    "Challenge: Prendre une photo d'un arbre que vous pourriez grimper",
    "Challenge: Prend une photode ton verre d'eau (Restez Hydratés !)",
    "Challenge: Prendre une photo d'un objet atypique",
    "Challenge: Prendre une photo d'une porte ouverte",
    "Challenge: Prendre une photo d'un animal poilu",
    "Challenge: Prendre une photo d'une personne souriante",
    "Challenge: Prendre une photo d'un objet en mouvement",
    "Challenge: Prendre une photo d'un objet en noir et blanc",
    "Challenge: Prendre une photo d'un coucher de soleil",
    "Challenge: Prendre une photo d'en bas !",
    "Challenge: Prendre une photo d'un objet en contre-jour",
    "Challenge: Prendre une photo en gros plan",
    "Challenge: Prendre une photo d'un objet en hauteur",
    "Challenge: Prendre une photo d'un proche !",
    "Challenge: Prendre une photo de ton repas",

    // Add more challenges as needed
  ];

  // State to store the selected challenge
  const [selectedChallenge, setSelectedChallenge] = useState('');

  // Function to handle button press
  const handlePress = () => {
    // Generate a random index to select a challenge from the array
    const randomIndex = Math.floor(Math.random() * challenges.length);
    // Set the selected challenge
    setSelectedChallenge(challenges[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text>Open the jam !</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../assets/jam.jpg')} style={{ width: 200, height: 200 }} />
      </TouchableOpacity>
      {/* Display the selected challenge */}
      {selectedChallenge ? <Text style={styles.challenge}>{selectedChallenge}</Text> : null}
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
  challenge: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
