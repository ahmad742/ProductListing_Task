import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

const { width, height } = Dimensions.get('window');

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const translateYAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Start animations after a short delay
    const timer = setTimeout(() => {
      Animated.parallel([
        // Fade in animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        // Scale animation
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 20,
          friction: 7,
          useNativeDriver: true,
        }),
        // Slide up animation
        Animated.spring(translateYAnim, {
          toValue: 0,
          tension: 20,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);

    // Trigger navigation after animations
    const navigationTimer = setTimeout(() => {
      onAnimationComplete();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(navigationTimer);
    };
  }, [fadeAnim, scaleAnim, translateYAnim, onAnimationComplete]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: translateYAnim },
            ],
          },
        ]}
      >
        <Text style={styles.logo}>V</Text>
        <Text style={styles.title}>Valley</Text>
        <Text style={styles.subtitle}>Your Style, Your Way</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 80,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 4,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff80',
    letterSpacing: 2,
  },
});

export default SplashScreen; 