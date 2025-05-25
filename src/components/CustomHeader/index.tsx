import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface CustomHeaderProps {
  title: string;
  showMenu?: boolean;
  showProfile?: boolean;
  onMenuPress?: () => void;
  onProfilePress?: () => void;
}

export function CustomHeader({
  title,
  showMenu = true,
  showProfile = true,
  onMenuPress,
  onProfilePress,
}: CustomHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {showMenu && (
          <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
            <FontAwesome name="bars" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {showProfile && (
          <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
            <View style={styles.profileCircle}>
              <FontAwesome name="user" size={24} color="#000033" />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.curve} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000033',
    paddingTop: 50,
    position: 'relative',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  curve: {
    height: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -1,
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  profileButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 