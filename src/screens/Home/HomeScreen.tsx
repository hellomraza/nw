import React from 'react';
import {FlatList, Text, View} from 'react-native';
import MapView from 'react-native-maps';

import {Loader, PropertyCard} from '@components';
import {useDeals} from '@hooks';

const HomeScreen = () => {
  const {deals, toggleFavourite} = useDeals(['GET_DEALS']);
  return (
    <View>
      <FlatList
        className="p-4"
        bounces
        bouncesZoom
        alwaysBounceVertical
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsVerticalScrollIndicator={false}
        data={deals?.data?.data?.data || []}
        renderItem={props => (
          <PropertyCard toggleFavourite={toggleFavourite} {...props} />
        )}
        ListEmptyComponent={
          deals?.isLoading ? LoadingComponent : NoContentComponent
        }
        keyExtractor={(item, i) => item?.salesforceId || i.toString()}
      />
    </View>
  );
};

const LoadingComponent = () => <Loader />;

const NoContentComponent = () => (
  <View className="h-4">
    <Text>No Content</Text>
  </View>
);

const ItemSeparatorComponent = () => <View className="h-4" />;

export default HomeScreen;
