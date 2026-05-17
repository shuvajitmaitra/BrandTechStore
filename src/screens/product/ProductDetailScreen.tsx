import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ShieldCheck } from 'lucide-react-native';
import { RootStackParamList } from '../../navigation/types';
import FavoriteButton from '../../components/product/FavoriteButton';
import ProductRating from '../../components/product/ProductRating';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleFavorite } from '../../redux/slices/productSlice';

type ProductDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetail'
>;

const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.product.favorites);
  const { product } = route.params;
  const isFavorite = favorites.some(favorite => favorite.id === product.id);

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}>
      <View className="absolute right-[-70] top-12 h-60 w-60 rounded-full bg-primary/10" />
      <View className="overflow-hidden rounded-[32px] border border-border bg-accent p-6">
        <View className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-white/5" />
        <View className="mb-4 self-start rounded-full border border-white/15 bg-black/20 px-4 py-2">
          <Text className="text-xs font-semibold uppercase tracking-[2px] text-[#d8b6ff]">
            Product Overview
          </Text>
        </View>
        <Image
          source={{ uri: product.image }}
          resizeMode="contain"
          className="h-72 w-full"
        />
      </View>

      <View className="mt-5 rounded-[32px] border border-border bg-card p-5">
        <View className="flex-row items-start justify-between">
          <View className="mr-4 flex-1">
            <Text className="text-xs font-semibold uppercase tracking-[1px] text-primary">
              {product.category}
            </Text>
            <Text className="mt-2 text-3xl font-bold leading-10 text-foreground">
              {product.title}
            </Text>
          </View>

          <FavoriteButton
            isFavorite={isFavorite}
            onPress={() => dispatch(toggleFavorite(product))}
            size={22}
          />
        </View>

        <View className="mt-5 rounded-[28px] border border-border bg-background px-4 py-4">
          <View className="flex-row items-start justify-between gap-3">
            <Text className="text-3xl font-bold text-accent-foreground">
              ${product.price.toFixed(2)}
            </Text>
            <ProductRating
              rating={product.rating}
              iconSize={16}
              textSizeClassName="text-sm"
              countSizeClassName="text-sm"
              className="pt-1"
            />
          </View>
          <View className="mt-4 flex-row items-center rounded-full border border-[#336f4c] bg-[#1f4a33] px-4 py-3">
            <ShieldCheck size={16} color="#7ef0a1" />
            <Text className="ml-2 text-sm font-medium text-[#c5efd2]">
              Trusted product signal for business-focused evaluation
            </Text>
          </View>
        </View>

        <Text className="mt-6 text-lg font-semibold text-foreground">
          Description
        </Text>
        <Text className="mt-3 text-base leading-7 text-muted-foreground">
          {product.description}
        </Text>

        <View className="mt-6 rounded-[28px] border border-[#7b4ac2] bg-[#31184e] px-4 py-4">
          <Text className="text-xs font-semibold uppercase tracking-[2px] text-[#d8b6ff]">
            Category
          </Text>
          <Text className="mt-2 text-xl font-bold text-foreground">
            {product.category}
          </Text>
          <Text className="mt-2 text-sm leading-6 text-secondary-foreground">
            Strategy-led styling adapted from the BrandTECH web direction.
          </Text>
        </View>

        <Pressable
          onPress={() => dispatch(toggleFavorite(product))}
          className={`mt-6 rounded-full border px-5 py-4 ${
            isFavorite
              ? 'border-destructive bg-destructive'
              : 'border-primary bg-primary'
          }`}>
          <Text className="text-center text-base font-semibold text-white">
            {isFavorite ? 'Remove from favorites' : 'Save to favorites'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;
