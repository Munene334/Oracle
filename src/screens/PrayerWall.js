import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const mock = [
  { id: 'r1', author: 'Amelia', text: 'Please pray for my family this week.' },
  { id: 'r2', author: 'James', text: 'Praise: healed from surgery!' }
];

export default function PrayerWall() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Community Prayer Wall</Text>
      <FlatList
        data={mock}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={{ fontWeight: '600' }}>{item.author}</Text>
            <Text>{item.text}</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Button title="Prayed For" onPress={() => {}} />
              <View style={{ width: 12 }} />
              <Button title="Comment" onPress={() => {}} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 20, fontWeight: '600', padding: 12 },
  card: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' }
});
