import { View, Text, Image } from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View className="flex-row items-center">
      <Image
        source={require('../../../assets/logo.webp')}
        className="h-8 w-8"
      />
      <Text className="font-bold ml-1 text-2xl text-foreground">Brand</Text>
      <Text className="text-foreground text-2xl font-medium">TECH</Text>
    </View>
  );
};

export default Logo;
