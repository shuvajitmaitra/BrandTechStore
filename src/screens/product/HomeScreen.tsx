import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductCard from '../../components/product/ProductCard';
import EmptyState from '../../components/product/EmptyState';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  filterProducts,
  toggleFavorite,
} from '../../redux/slices/productSlice';
import Banner from '@/components/home/Banner';
import useProducts from '@/hooks/useProducts';
import { RootStackParamList } from '@/navigation/RootStack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const dispatch = useAppDispatch();
  const { loadProducts } = useProducts();
  const { favorites, filteredProducts, searchText, loading, errorMessage } =
    useAppSelector(state => state.product);

  if (loading && filteredProducts.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-6">
        <View className="rounded-full border border-border bg-card p-5">
          <ActivityIndicator size="large" color="#9b5cff" />
        </View>
        <Text className="mt-6 text-lg font-semibold text-foreground">
          Building your product feed...
        </Text>
        <Text className="mt-2 text-base text-muted-foreground">
          Fetching BrandTECH-inspired inventory.
        </Text>
      </View>
    );
  }

  if (errorMessage) {
    return (
      <View className="flex-1 bg-background">
        <EmptyState
          title="Request failed"
          description={errorMessage}
          actionLabel="Try again"
          onActionPress={loadProducts}
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 10,
          paddingBottom: 32,
        }}
        columnWrapperStyle={{ gap: 0 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Banner
            filteredCount={filteredProducts?.length}
            searchText={searchText}
            onChangeSearchText={value => dispatch(filterProducts(value))}
          />
        }
        ListEmptyComponent={
          <EmptyState
            title="No matches found"
            description="Try a different product name to widen the results."
          />
        }
        refreshControl={
          <RefreshControl
            colors={['#ffffff']}
            refreshing={true}
            onRefresh={loadProducts}
          />
        }
        renderItem={({ item }) => {
          const isFavorite = favorites.some(
            favorite => favorite.id === item.id,
          );

          return (
            <ProductCard
              product={item}
              isFavorite={isFavorite}
              className={item.id % 2 === 1 ? 'mr-1.5' : 'ml-1.5'}
              onPress={() =>
                navigation.navigate('ProductDetail', { product: item })
              }
              onToggleFavorite={() => dispatch(toggleFavorite(item))}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
