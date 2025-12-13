import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mock = [
  { id: 'h1', verse: 'Psalm 23:1', note: 'The Lord is my shepherd.' }
];

export default function Highlights() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Highlights & Notes</Text>
      <FlatList
        data={mock}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ fontWeight: '600' }}>{item.verse}</Text>
            <Text>{item.note}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 }, header: { fontSize: 20, fontWeight: '600', padding: 12 }, card: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' } });
