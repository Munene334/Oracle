import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <Text style={{ padding: 12 }}>Not signed in.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{user.name}</Text>
      <Text style={{ padding: 8 }}>Favorite verse: {user.faithBio?.favoriteVerse}</Text>
      <Text style={{ padding: 8 }}>Denomination: {user.faithBio?.denomination}</Text>
      <Text style={{ padding: 8 }}>Reading Streak: {user.streak}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 12 }, header: { fontSize: 22, fontWeight: '700' } });
