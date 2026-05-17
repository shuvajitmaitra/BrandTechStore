import React from 'react';
import { Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Heart, Sparkles } from 'lucide-react-native';
import HomeScreen from '../screens/product/HomeScreen';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';
import FavoritesScreen from '../screens/product/FavoritesScreen';
import { RootStackParamList } from './types';
import { useThemeColors } from '../hooks/useThemeColors';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { colors } = useThemeColors();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.foreground,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: '700',
          color: colors.foreground,
          fontSize: 20,
        },
        contentStyle: {
          backgroundColor: colors.background,
        },
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('Favorites')}
            className="flex-row items-center rounded-full border border-border bg-primary/20 px-3 py-2">
            <Heart size={16} color={colors.primary} fill="transparent" />
            <Text className="ml-2 text-sm font-semibold text-foreground">Saved</Text>
          </Pressable>
        ),
      })}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'BrandTECH',
          headerLeft: () => <Sparkles size={20} color={colors.primary} />,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          title: 'Product Lab',
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
