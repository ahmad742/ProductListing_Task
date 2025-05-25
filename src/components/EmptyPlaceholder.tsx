import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EmptyPlaceholderProps {
  message: string;
}

export default function EmptyPlaceholder({ message }: EmptyPlaceholderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16, color: '#aaa' }
});
