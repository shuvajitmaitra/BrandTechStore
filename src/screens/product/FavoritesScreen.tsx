import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductCard from '../../components/product/ProductCard';
import EmptyState from '../../components/product/EmptyState';
import { RootStackParamList } from '../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleFavorite } from '../../redux/slices/productSlice';

type FavoritesScreenProps = NativeStackScreenProps<RootStackParamList, 'Favorites'>;

const FavoritesScreen = ({ navigation }: FavoritesScreenProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.product.favorites);

  return (
    <View className="flex-1 bg-background">
      <View className="absolute right-[-50] top-16 h-52 w-52 rounded-full bg-primary/10" />
      <FlatList
        data={favorites}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ padding: 20, paddingBottom: 32, flexGrow: 1 }}
        columnWrapperStyle={favorites.length > 1 ? { gap: 12 } : undefined}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          favorites.length > 0 ? (
            <View className="mb-6">
              <Text className="text-xs font-semibold uppercase tracking-[2px] text-primary">
                Personal Vault
              </Text>
              <Text className="mt-3 text-4xl font-black text-foreground">
                Saved favorites
              </Text>
              <Text className="mt-3 text-base leading-7 text-muted-foreground">
                Your selected products stay stored locally in a curated BrandTECH-style collection.
              </Text>
            </View>
          ) : null
        }
        ListEmptyComponent={
          <EmptyState
            title="No favorites yet"
            description="Save a product from the home or detail screen and it will appear here."
            actionLabel="Browse products"
            onActionPress={() => navigation.navigate('Home')}
          />
        }
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            isFavorite
            className={item.id % 2 === 1 ? 'mr-1.5' : 'ml-1.5'}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
            onToggleFavorite={() => dispatch(toggleFavorite(item))}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
