import React from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const mock = [
  { id: 'c1', author: 'Amelia', text: 'Praying with you.' },
  { id: 'c2', author: 'James', text: 'Amen 🙏' }
];

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plan Chat (Live)</Text>
      <FlatList data={mock} keyExtractor={(i) => i.id} renderItem={({ item }) => (
        <View style={styles.msg}><Text style={{ fontWeight: '600' }}>{item.author}</Text><Text>{item.text}</Text></View>
      )} />
      <View style={styles.composer}>
        <TextInput placeholder="Write a comment..." style={styles.input} />
        <Button title="Send" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 12 }, header: { fontSize: 18, fontWeight: '700', marginBottom: 8 }, msg: { paddingVertical: 8 }, composer: { flexDirection: 'row', alignItems: 'center', gap: 8 }, input: { flex: 1, borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 6 } });
