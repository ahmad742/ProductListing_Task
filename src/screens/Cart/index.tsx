import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { CartItem } from "../../context/CartContext";
import Toast from "react-native-toast-message";
import { FadeInView, ScaleInView, SlideInView } from "../../utils/animations";
import { styles } from "./styles";

export const CartScreen = () => {
  const {
    items,
    removeFromCart,
    addToCart,
    removeAllQuantities,
    getTotalPrice,
  } = useCart();

  const handleRemoveItem = (itemId: number, quantity: number) => {
    removeAllQuantities(itemId);
    Toast.show({
      type: "success",
      text1: "Item Removed",
      text2: `Removed ${quantity} ${
        quantity > 1 ? "items" : "item"
      } from your cart`,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const handleQuantityChange = (item: CartItem, increase: boolean) => {
    if (increase) {
      addToCart(item);
    } else {
      removeFromCart(item.id);
    }
  };

  const renderItem = ({ item, index }: { item: CartItem; index: number }) => (
    <FadeInView delay={index * 100}>
      <View style={styles.cartItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={[
                styles.quantityButton,
                item.quantity <= 1 && styles.quantityButtonDisabled,
              ]}
              onPress={() => handleQuantityChange(item, false)}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQuantityChange(item, true)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveItem(item.id, item.quantity)}
          >
            <Text style={styles.removeButtonText}>Remove All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </FadeInView>
  );

  if (items.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScaleInView style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Text style={styles.emptySubtext}>
            Add some items to get started!
          </Text>
        </ScaleInView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <SlideInView direction="right" style={styles.footer}>
        <Text style={styles.total}>Total: ${getTotalPrice().toFixed(2)}</Text>
        <TouchableOpacity
          onPress={() => Alert.alert("Comming Soon")}
          style={styles.checkoutButton}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </SlideInView>
      <Toast />
    </SafeAreaView>
  );
};
