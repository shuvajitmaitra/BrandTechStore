import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ArrowUpRight, Star } from 'lucide-react-native';
import { Product } from '../../types/productTypes';
import FavoriteButton from './FavoriteButton';

type ProductCardProps = {
  product: Product;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
  className?: string;
};

const ProductCard = ({
  product,
  isFavorite,
  onPress,
  onToggleFavorite,
  className = '',
}: ProductCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 overflow-hidden rounded-3xl border border-border bg-card ${className}`}
      style={{
        shadowColor: '#9b5cff',
        shadowOpacity: 0.15,
        shadowRadius: 24,
        shadowOffset: { width: 0, height: 10 },
        elevation: 5,
      }}
    >
      <View className="relative overflow-hidden bg-accent px-4 pb-4 pt-5">
        <View className="absolute -right-12 -top-8 h-32 w-32 rounded-full bg-primary/20" />

        <Image
          source={{ uri: product.image }}
          resizeMode="contain"
          className="mt-10 h-32 w-full"
        />
        <FavoriteButton
          isFavorite={isFavorite}
          onPress={onToggleFavorite}
          className="absolute right-4 top-4"
        />
      </View>

      <View className="gap-3 px-5 pb-5 pt-4">
        <Text className="text-xs font-semibold uppercase tracking-[1px] text-primary">
          {product.category}
        </Text>
        <Text
          numberOfLines={2}
          className="text-xl font-bold leading-6 text-foreground"
        >
          {product.title}
        </Text>

        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </Text>

          <View className="flex-row items-center rounded-full border border-[#6940a7] bg-[#2a1740] px-3 py-1.5">
            <Star size={14} color="#f4b85a" fill="#f4b85a" />
            <Text className="ml-1 text-sm font-semibold text-[#f3d7a4]">
              {product.rating.rate.toFixed(1)} ({product.rating.count})
            </Text>
          </View>
        </View>

        <View className="mt-1 flex-row items-center justify-between rounded-full border border-border bg-background px-4 py-3">
          <Text className="mr-2 flex-1 text-sm font-medium text-secondary-foreground">
            Open product insight
          </Text>
          <ArrowUpRight size={18} color="#9b5cff" />
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
