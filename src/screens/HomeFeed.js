import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FeedContext } from '../contexts/FeedContext';
import Post from '../components/Post';

export default function HomeFeed() {
  const { posts } = useContext(FeedContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Main Feed</Text>
      <FlatList
        data={posts}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <Post post={item} />}
        ListEmptyComponent={<Text style={{ padding: 16 }}>No posts yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 20, fontWeight: '600', padding: 12 }
});
