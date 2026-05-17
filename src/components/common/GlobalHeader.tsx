import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import GlobalStatusBar from './GlobalStatusBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColors } from '@/hooks/useThemeColors';
import { Heart, Moon } from 'lucide-react-native';
import Logo from './Logo';

const GlobalHeader = () => {
  const { top } = useSafeAreaInsets();
  const { colors, toggleColorScheme } = useThemeColors();

  return (
    <View
      style={{ paddingTop: top }}
      className="flex-row items-center justify-between px-4"
    >
      <GlobalStatusBar />
      <Logo />
      <View className="flex-row items-center justify-between gap-2">
        <Pressable
          onPress={() => toggleColorScheme()}
          className="flex-row items-center rounded-full border border-border bg-primary/20 h-10 w-10 justify-center"
        >
          <Moon size={16} color={colors.primary} fill="transparent" />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Favorites')}
          className="flex-row items-center rounded-full border border-border bg-primary/20 h-10 w-10 justify-center"
        >
          <Heart size={16} color={colors.primary} fill="transparent" />
        </Pressable>
      </View>
    </View>
  );
};

export default GlobalHeader;
