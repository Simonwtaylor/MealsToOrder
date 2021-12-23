import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'green', padding: 16, borderBottomColor: 'black', borderBottomWidth: 2 }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, flexGrow: 1, backgroundColor: 'blue', padding: 16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style={'auto'} />
    </>
  );
}

const styles = StyleSheet.create({
});
