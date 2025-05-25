import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { default as RNLinearGradient } from "react-native-linear-gradient";

const { width } = Dimensions.get("window");
const TAB_WIDTH = width / 3;

const CustomGradientCircle = ({ children }: { children: React.ReactNode }) => (
  <RNLinearGradient
    colors={["#ff9966", "#ff5e62"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.activeTab}
  >
    {children}
  </RNLinearGradient>
);

export function AnimatedTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const getTabIcon = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case "Cart":
        return (
          <MaterialIcons
            name="shopping-cart"
            size={24}
            color={isFocused ? "#fff" : "#fff"}
          />
        );
      case "Home":
        return (
          <Ionicons
            name="home-outline"
            size={24}
            color={isFocused ? "#fff" : "#fff"}
          />
        );
      case "Favorites":
        return (
          <FontAwesome
            name="heart-o"
            size={24}
            color={isFocused ? "#fff" : "#fff"}
          />
        );
      default:
        return (
          <Ionicons
            name="home-outline"
            size={24}
            color={isFocused ? "#fff" : "#fff"}
          />
        );
    }
  };

  const getLabel = (routeName: string) => {
    switch (routeName) {
      case "Cart":
        return "Cart";
      case "Home":
        return "Home";
      case "Favorites":
        return "Favorites";
      default:
        return "";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = getLabel(route.name);
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[styles.tab]}
            >
              {isFocused ? (
                <View style={styles.activeTabContainer}>
                  <CustomGradientCircle>
                    <View style={styles.iconWrapper}>
                      {getTabIcon(route.name, isFocused)}
                    </View>
                  </CustomGradientCircle>
                  <Text style={styles.activeLabel}>{label}</Text>
                </View>
              ) : (
                <View style={styles.inactiveTabContainer}>
                  <View style={styles.iconContainer}>
                    {getTabIcon(route.name, isFocused)}
                  </View>
                  <Text style={styles.inactiveLabel}>{label}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  tabBar: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "#000033",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    position: "relative",
    paddingBottom: 18,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabContainer: {
    alignItems: "center",
    transform: [{ translateY: -25 }],
  },
  inactiveTabContainer: {
    alignItems: "center",
    paddingTop: 12,
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  iconWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  activeTab: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: "hidden",
  },
  activeLabel: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  inactiveLabel: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
    opacity: 0.8,
  },
});
