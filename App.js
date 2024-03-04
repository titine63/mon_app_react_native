// App.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, StatusBar, Dimensions, Button, ScrollView  } from 'react-native';
import MyAppText from './MyAppText';
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light_Italic,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold_Italic,
} from '@expo-google-fonts/open-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_300Light_Italic,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium_Italic,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold_Italic,
  });

  if (!fontsLoaded) {
    return <MyAppText>Loading...</MyAppText>;
  }

  return (
    <View style={styles.container}>
      
      <MyAppText style={styles.title}>Recettes du jour</MyAppText>
      
      <TouchableOpacity style={styles.button}>
        <Text> This is a button </Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>

      <View style={styles.imageContainer}>   
      
      <Image
        style={styles.image}
        source={require('./assets/pictures/image8.jpg')}
        resizeMode="cover"
      />
      <Image
        style={styles.image}
        source={require('./assets/pictures/image7.jpg')}
        resizeMode="cover"
      />
      <Image
          style={styles.image}
          source={require('./assets/pictures/image1.jpg')}
          resizeMode="cover"
        />
        <Image
          style={styles.image}
          source={require('./assets/pictures/image2.jpg')}
          resizeMode="cover"
        />
        <Image
          style={styles.image}
          source={require('./assets/pictures/image3.jpg')}
          resizeMode="cover"
        />
        <Image
          style={styles.image}
          source={require('./assets/pictures/image4.jpg')}
          resizeMode="cover"
        />
        <Image
          style={styles.image}
          source={require('./assets/pictures/image5.jpg')}
          resizeMode="cover"
        />
        <Image
          style={styles.image}
          source={require('./assets/pictures/image6.jpg')}
          resizeMode="cover"
        />
      </View>

      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#037171',
    marginVertical: 20,
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    textAlign: 'center',
    color: '#4CAF50',
    fontFamily: 'OpenSans_800ExtraBold_Italic', // la police Google
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,  // ajout de marge autour du conteneur d'images
    marginRight: 20, // suppression de la marge à droite du conteneur d'images
    paddingRight: 10, // ajout de padding à l'intérieur du conteneur d'images
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10, // Ajout d'une marge en bas pour l'espacement
  },
  
  image: {
    width: imageWidth,
    aspectRatio: 1,
    marginBottom: 4,
  },
  scrollView: { // Ajoutez ce style si nécessaire
    marginHorizontal: 0,
  },
});
