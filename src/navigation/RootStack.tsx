import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/product/HomeScreen';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';
import FavoritesScreen from '../screens/product/FavoritesScreen';
import { RootStackParamList } from './types';
import GlobalHeader from '@/components/common/GlobalHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const renderHeader = ({
    canGoBack,
    isWishlist,
  }: {
    canGoBack?: boolean;
    isWishlist?: boolean;
  }) => {
    return <GlobalHeader canGoBack={canGoBack} isWishlist={isWishlist} />;
  };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => renderHeader({ canGoBack: false }),
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          header: () => renderHeader({ canGoBack: true }),
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          header: () => renderHeader({ isWishlist: true, canGoBack: true }),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
