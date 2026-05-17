import { View, Pressable } from 'react-native';
import React from 'react';
import GlobalStatusBar from './GlobalStatusBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ArrowLeft, Heart, Moon, Sun } from 'lucide-react-native';
import Logo from './Logo';
import { useNavigation } from '@react-navigation/native';

const GlobalHeader = ({
  canGoBack,
  isWishlist = false,
}: {
  canGoBack?: boolean;
  isWishlist?: boolean;
}) => {
  const { top } = useSafeAreaInsets();
  const { colors, toggleColorScheme, isDark } = useThemeColors();
  const navigation = useNavigation<any>();

  return (
    <View
      style={{ paddingTop: top }}
      className="flex-row items-center justify-between px-4 pb-2 bg-background"
    >
      <GlobalStatusBar />
      {!canGoBack ? (
        <Logo />
      ) : (
        <Pressable
          className="flex-row items-center rounded-full border border-border bg-primary/20 h-12 w-12 justify-center"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft color={colors.primary} size={24} />
        </Pressable>
      )}
      <View className="flex-row items-center justify-between gap-2">
        <Pressable
          onPress={() => toggleColorScheme()}
          className="flex-row items-center rounded-full border border-border bg-primary/20 h-12 w-12 justify-center"
        >
          {isDark ? (
            <Sun size={20} color={colors.primary} fill="transparent" />
          ) : (
            <Moon size={20} color={colors.primary} fill="transparent" />
          )}
        </Pressable>
        {!isWishlist && (
          <Pressable
            onPress={() => navigation.navigate('Favorites')}
            className="flex-row items-center rounded-full border border-border bg-primary/20 h-12 w-12 justify-center"
          >
            <Heart size={20} color={colors.primary} fill="transparent" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default GlobalHeader;
