import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function VerseCreator() {
  const [verse, setVerse] = useState('John 3:16');
  const [text, setText] = useState('For God so loved the world...');

  const onCreate = () => {
    // Placeholder: render verse into an image or share — implement with expo-file-system + @react-native-community/image-editor
    alert('Verse image created (placeholder)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verse Image Creator</Text>
      <TextInput style={styles.input} value={verse} onChangeText={setVerse} placeholder="Verse reference" />
      <TextInput style={[styles.input, { height: 120 }]} value={text} onChangeText={setText} multiline />
      <Button title="Create Image" onPress={onCreate} />
      <View style={{ padding: 12 }} />
      <Text style={{ color: '#888' }}>Preview (placeholder)</Text>
      <View style={styles.preview}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>{verse}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 12 }, header: { fontSize: 20, fontWeight: '700', marginBottom: 8 }, input: { borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 6, marginBottom: 8 }, preview: { marginTop: 12, padding: 16, backgroundColor: '#f7f7f7', borderRadius: 8 } });
