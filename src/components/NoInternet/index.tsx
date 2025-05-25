import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FONTS } from "../../theme/fonts";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface NoInternetProps {
  onRetry: () => void;
}

export const NoInternet: React.FC<NoInternetProps> = ({ onRetry }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <FontAwesome
            name="shopping-bag"
            size={24}
            color="#000"
            style={styles.logoIcon}
          />
          <Text style={styles.logoText}>SHOPIFY</Text>
        </View>
        <Text style={styles.headerTitle}>Discover</Text>
        <Text style={styles.headerSubtitle}>Premium Products</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/images/no-internet.png")}
            style={styles.image}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoIcon: {
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: "#000",
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: "#000",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: "#000",
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    position: "relative",
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  retryButton: {
    backgroundColor: "#000033",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 30,
  },
  retryText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: FONTS.semiBold,
  },
});
