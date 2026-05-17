import React from 'react';
import { Pressable } from 'react-native';
import { Heart } from 'lucide-react-native';
import { useThemeColors } from '../../hooks/useThemeColors';

type FavoriteButtonProps = {
  isFavorite: boolean;
  onPress: () => void;
  size?: number;
  className?: string;
};

const FavoriteButton = ({
  isFavorite,
  onPress,
  size = 20,
  className = '',
}: FavoriteButtonProps) => {
  const { colors } = useThemeColors();

  return (
    <Pressable
      onPress={event => {
        event.stopPropagation();
        onPress();
      }}
      className={`items-center justify-center p-2 ${className}`}
    >
      <Heart
        size={size}
        color={isFavorite ? '#ff5c8d' : colors.foreground}
        fill={isFavorite ? '#ff5c8d' : 'transparent'}
      />
    </Pressable>
  );
};

export default FavoriteButton;
