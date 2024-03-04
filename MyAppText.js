import React from 'react';
import { Text, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  customText: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 16,
    color: '#333',
  },
  boldItalic: {
    fontFamily: 'OpenSans_800ExtraBold_Italic',
  }
});

const MyAppText = ({ children, style, boldItalic, ...otherProps }) => {
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
    return <Text>Loading...</Text>;
  }

  return (
    <Text style={[styles.customText, boldItalic && styles.boldItalic, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default MyAppText;


