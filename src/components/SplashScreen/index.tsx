import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { FONTS } from '../../theme/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const SplashScreen = () => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.3);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <FontAwesome name="shopping-bag" size={60} color="#000033" />
        <Text style={styles.title}>SHOPIFY</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontFamily: FONTS.bold,
    color: '#000033',
    letterSpacing: 2,
  },
}); 