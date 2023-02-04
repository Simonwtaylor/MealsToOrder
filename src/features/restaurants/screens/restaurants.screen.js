/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { theme } from '../../../contexts/theme/';

export default function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          backgroundColor: 'green',
          padding: theme.space[3],
          borderBottomColor: 'black',
          borderBottomWidth: 2,
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          backgroundColor: 'blue',
          padding: theme.space[3],
        }}
      >
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
}
