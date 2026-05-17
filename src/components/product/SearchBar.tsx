import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { useThemeColors } from '../../hooks/useThemeColors';

type SearchBarProps = {
  value: string;
  onChangeText: (value: string) => void;
};

const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  const { colors } = useThemeColors();

  return (
    <View className="mb-6 rounded-[28px] border border-border bg-card px-4 py-4">
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-xs font-semibold uppercase tracking-[2px] text-primary">
          Product Search
        </Text>
        <View className="rounded-full border border-border bg-accent px-3 py-1.5">
          <SlidersHorizontal size={14} color={colors.primary} />
        </View>
      </View>
      <View className="flex-row items-center rounded-full border border-border bg-background px-4 py-3">
        <Search size={18} color={colors.primary} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Search innovative products"
          placeholderTextColor={colors.mutedForeground}
          className="ml-3 flex-1 text-base text-foreground"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

export default SearchBar;
