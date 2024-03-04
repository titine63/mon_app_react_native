//MyAppImage.js
import React from 'react';
import { Image } from 'react-native';

export default function MyAppImage({ source, style }) {
  return (
    <Image
      style={style}
      source={source}
      resizeMode="cover"
    />
  );
}
