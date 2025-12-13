import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function GroupPlans({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Group Plans</Text>
      <Text style={{ padding: 8 }}>Create or join devotionals with friends. Each plan has a linked chat and daily reading.</Text>
      <Button title="Start New Plan" onPress={() => navigation.navigate('PlansCreate')} />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 12 }, header: { fontSize: 20, fontWeight: '600' } });
