import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const Logo = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Home');
      }}
      className="flex-row items-center"
    >
      <Image
        source={require('../../../assets/logo.webp')}
        className="h-8 w-8"
      />
      <Text className="font-bold ml-2 text-2xl text-foreground">Brand</Text>
      <Text className="text-foreground text-2xl font-medium">TECH</Text>
    </Pressable>
  );
};

export default Logo;
