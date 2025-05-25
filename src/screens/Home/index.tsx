import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    View,
    Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../../components/ProductCard';
import { Product } from '@context/CartContext';
import { productsApi } from '../../api/calls';
import { styles } from './styles';
import { NoInternet } from '../../components/NoInternet';
import { useNetwork } from '../../context/NetworkContext';

export const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const { isConnected } = useNetwork();
  
  // Animation values
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(50)).current;

  useEffect(() => {
    loadProducts();
  }, [isConnected]); // Re-fetch when connection status changes

  useEffect(() => {
    if (!loading) {
      // Start animations when products are loaded
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [loading]);

  const loadProducts = async () => {
    if (!isConnected) {
      setError('No internet connection');
      setLoading(false);
      return;
    }

    try {
      const response = await productsApi.getAllProducts();
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(
    product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      </SafeAreaView>
    );
  }

  if (!isConnected || error) {
    return <NoInternet onRetry={loadProducts} />;
  }

  const renderItem = ({ item, index }: { item: Product; index: number }) => {
    const itemDelay = index * 100;
    const itemFade = new Animated.Value(0);
    const itemTranslateY = new Animated.Value(50);

    Animated.parallel([
      Animated.timing(itemFade, {
        toValue: 1,
        duration: 500,
        delay: itemDelay,
        useNativeDriver: true,
      }),
      Animated.timing(itemTranslateY, {
        toValue: 0,
        duration: 500,
        delay: itemDelay,
        useNativeDriver: true,
      }),
    ]).start();

    return (
      <Animated.View
        style={{
          opacity: itemFade,
          transform: [{ translateY: itemTranslateY }],
        }}>
        <ProductCard
          product={item}
          onViewDetails={() => {
            // @ts-expect-error - Navigation typing issue
            navigation.navigate('ProductDetails', { product: item });
          }}
        />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <FontAwesome name="shopping-bag" size={24} color="#000" style={styles.logoIcon} />
          <Text style={styles.logoText}>SHOPIFY</Text>
        </View>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>Premium Products</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {filteredProducts.length === 0 ? (
        <Animated.View
          style={[
            styles.noResultsContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY }],
            },
          ]}>
          <Text style={styles.noResultsText}>No products found</Text>
          <Text style={styles.noResultsSubtext}>
            Try searching with different keywords
          </Text>
        </Animated.View>
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.columnWrapper}
        />
      )}
    </SafeAreaView>
  );
}; 