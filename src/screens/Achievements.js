import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const badges = [
  { id: 'b1', name: 'First Read', description: 'Completed first reading plan.' },
  { id: 'b2', name: '7-Day Streak', description: 'Read daily for a week.' }
];

export default function Achievements() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Achievements</Text>
      <FlatList
        data={badges}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ fontWeight: '700' }}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 }, header: { fontSize: 20, fontWeight: '600', padding: 12 }, card: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' } });
