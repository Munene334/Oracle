import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Post({ post }) {
  return (
    <View style={styles.card}>
      <Text style={{ fontWeight: '700' }}>{post.author.name}</Text>
      {post.verse && <Text style={{ color: '#666' }}>{post.verse}</Text>}
      <Text style={{ marginTop: 6 }}>{post.text}</Text>
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <TouchableOpacity style={styles.badge}><Text>Amen 🙏 {post.reactions?.amen || 0}</Text></TouchableOpacity>
        <View style={{ width: 8 }} />
        <TouchableOpacity style={styles.badge}><Text>Share</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ card: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' }, badge: { padding: 6, backgroundColor: '#f2f2f2', borderRadius: 6 } });
