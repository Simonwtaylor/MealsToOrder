/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

import { theme } from '../../../contexts/theme/';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star.js';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = '',
    photos = ['https://picsum.photos/700'],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <Card style={{ backgroundColor: 'white' }} elevation={5}>
      <Card.Cover
        style={{
          borderRadius: 0,
          padding: theme.space[1],
          backgroundColor: 'white',
        }}
        source={{ uri: photos[0] }}
      />
      <View style={{ padding: theme.space[3] }}>
        <Text
          style={{
            padding: theme.space[2],
            color: theme.colors.ui.primary,
            fontFamily: theme.fonts.heading,
            fontSize: theme.fontSizes.body,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontFamily: theme.fonts.body,
            fontSize: theme.fontSizes.caption,
          }}
        >
          {address}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {[...Array(rating)].map(() => (
            <SvgXml
              xml={star}
              width={20}
              height={20}
              style={{ display: 'flex' }}
            />
          ))}
        </View>
      </View>
    </Card>
  );
};
