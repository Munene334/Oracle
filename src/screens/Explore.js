import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <Text style={{ padding: 12 }}>Trending devotionals, recommended content, and channels will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 }, header: { fontSize: 20, fontWeight: '600', padding: 12 } });
