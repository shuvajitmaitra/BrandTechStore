import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { Sparkles } from 'lucide-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductCard from '../../components/product/ProductCard';
import SearchBar from '../../components/product/SearchBar';
import EmptyState from '../../components/product/EmptyState';
import { RootStackParamList } from '../../navigation/types';
import { getProducts } from '../../services/productService';
import { Product } from '../../types/productTypes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggleFavorite } from '../../redux/slices/productSlice';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.product.favorites);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadProducts = async (isRefreshing = false) => {
    if (isRefreshing) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    setErrorMessage('');

    try {
      const productData = await getProducts();
      setProducts(productData);
    } catch {
      setErrorMessage(
        'Unable to load products right now. Check your internet connection and try again.',
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    if (!normalizedSearch) {
      return products;
    }

    return products.filter(product =>
      product.title.toLowerCase().includes(normalizedSearch),
    );
  }, [products, searchText]);

  if (loading) {
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
          onActionPress={() => loadProducts()}
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <View className="absolute left-[-40] top-12 h-44 w-44 rounded-full bg-primary/10" />
      <View className="absolute right-[-60] top-48 h-64 w-64 rounded-full bg-[#1e0f33]" />
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: 10,
          gap: 10,
          paddingBottom: 32,
        }}
        columnWrapperStyle={{ gap: 0 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => loadProducts(true)}
            tintColor="#9b5cff"
          />
        }
        ListHeaderComponent={
          <View>
            <View className="mb-4 self-start rounded-full border border-border bg-card px-4 py-2">
              <Text className="text-xs font-semibold uppercase tracking-[2px] text-primary">
                BrandTECH Store
              </Text>
            </View>
            <View className="flex-row flex-wrap gap-2 items-center">
              <Text className="text-5xl font-black text-foreground">
                We craft
              </Text>
              <View className=" self-start border px-2 py-3 border-[#6940a7]">
                <Text className="text-5xl font-black text-primary">
                  innovative
                </Text>
              </View>
              <View className=" self-start border px-2 py-3 border-[#ab662d]">
                <Text className="text-5xl font-black text-[#ffd6ba]">
                  products
                </Text>
              </View>
              <Text className=" text-5xl font-black text-foreground">that</Text>
              <Text className=" text-5xl font-black text-foreground">
                businesses trust
              </Text>
            </View>
            <Text className="mb-6 mt-2 max-w-[95%] text-base leading-7 text-muted-foreground">
              We help businesses thrive with innovative strategies, smart
              technology, and data-driven insights. From planning to execution.
            </Text>
            <SearchBar value={searchText} onChangeText={setSearchText} />
            <View className="flex-row gap-3">
              <View className="flex-1 rounded-[28px] border border-[#6940a7] bg-[#31184e] px-4 py-4">
                <Text className="text-xs font-semibold uppercase tracking-[2px] text-[#d8b6ff]">
                  Live Catalog
                </Text>
                <Text className="mt-2 text-3xl font-bold text-foreground">
                  {filteredProducts.length}
                </Text>
                <Text className="mt-1 text-sm text-secondary-foreground">
                  product{filteredProducts.length === 1 ? '' : 's'} shown
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
        }
        ListEmptyComponent={
          <EmptyState
            title="No matches found"
            description="Try a different product name to widen the results."
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
