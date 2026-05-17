import React from 'react';
import { Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Heart, Sparkles } from 'lucide-react-native';
import HomeScreen from '../screens/product/HomeScreen';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';
import FavoritesScreen from '../screens/product/FavoritesScreen';
import { RootStackParamList } from './types';
import { useThemeColors } from '../hooks/useThemeColors';
import GlobalHeader from '@/components/common/GlobalHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { colors } = useThemeColors();
  const renderHeader = () => {
    return <GlobalHeader />;
  };
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
            className="flex-row items-center rounded-full border border-border bg-primary/20 px-3 py-2"
          >
            <Heart size={16} color={colors.primary} fill="transparent" />
            <Text className="ml-2 text-sm font-semibold text-foreground">
              Saved
            </Text>
          </Pressable>
        ),
      })}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => renderHeader(),
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          header: () => renderHeader(),
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          header: () => renderHeader(),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
