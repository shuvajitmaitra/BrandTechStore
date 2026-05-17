import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ArrowUpRight, PlusIcon } from 'lucide-react-native';
import { Product } from '../../types/productTypes';
import FavoriteButton from './FavoriteButton';
import ProductRating from './ProductRating';

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
    >
      <View className="relative overflow-hidden bg-accent px-3 pb-4 pt-5">
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

      <View className="gap-1 p-3">
        <Text className="text-xs font-semibold uppercase tracking-[1px] text-primary">
          {product.category}
        </Text>
        <Text
          numberOfLines={1}
          className="text-xl font-bold leading-6 text-foreground"
        >
          {product.title}
        </Text>

        <ProductRating rating={product.rating} className="pt-1" />
        <View className="flex-row items-start justify-between gap-2">
          <Text className="text-2xl font-extrabold text-foreground">
            ${product.price.toFixed(2)}
          </Text>
          <View className="bg-primary h-10 w-10 justify-center items-center rounded-full">
            <PlusIcon color="white" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
