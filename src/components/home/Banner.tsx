import { View, Text } from 'react-native';
import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import SearchBar from '../product/SearchBar';
import { Sparkles } from 'lucide-react-native';

type BannerProps = {
  filteredCount: number;
  searchText: string;
  onChangeSearchText: (value: string) => void;
};

const Banner = ({
  filteredCount,
  searchText,
  onChangeSearchText,
}: BannerProps) => {
  const favorites = useAppSelector(state => state.product.favorites);

  return (
    <View className="mt-5">
      <View className="flex-row flex-wrap gap-2 items-center">
        <Text className="text-5xl font-black text-foreground">We craft</Text>
        <Text className="text-5xl font-black text-primary">innovative</Text>
        <Text className="text-5xl font-black text-[#f6610b]">products</Text>
        <Text className=" text-5xl font-black text-foreground">that</Text>
        <Text className=" text-5xl font-black text-foreground">
          businesses trust
        </Text>
      </View>
      <Text className="mb-6 mt-2 max-w-[95%] text-base leading-7 text-muted-foreground">
        We help businesses thrive with innovative strategies, smart technology,
        and data-driven insights. From planning to execution.
      </Text>
      <SearchBar value={searchText} onChangeText={onChangeSearchText} />
      <View className="flex-row gap-3">
        <View className="flex-1 rounded-[28px] border border-[#6940a7] bg-[#31184e] px-4 py-4">
          <Text className="text-xs font-semibold uppercase tracking-[2px] text-[#d8b6ff]">
            Live Catalog
          </Text>
          <Text className="mt-2 text-3xl font-bold text-foreground">
            {filteredCount}
          </Text>
          <Text className="mt-1 text-sm text-secondary-foreground">
            product{filteredCount === 1 ? '' : 's'} shown
          </Text>
        </View>
        <View className="flex-1 rounded-[28px] border border-[#336f4c] bg-[#1f4a33] px-4 py-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-xs font-semibold uppercase tracking-[2px] text-[#b4f0c7]">
              Saved
            </Text>
            <Sparkles size={15} color="#7ef0a1" />
          </View>
          <Text className="mt-2 text-3xl font-bold text-foreground">
            {favorites.length}
          </Text>
          <Text className="mt-1 text-sm text-[#c5efd2]">
            favorite{favorites.length === 1 ? '' : 's'} locally stored
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Banner;
