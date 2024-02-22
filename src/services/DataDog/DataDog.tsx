import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {DdRum} from '@datadog/mobile-react-native';

const DataDog = () => {
  return (
    <View>
      <Pressable
        onPress={() => {
          DdRum.startView('DataDog', 'DataDog').then(() => {
            console.log('Start View');
          });
        }}>
        <Text>Start View</Text>
      </Pressable>
      <Text>DataDog</Text>
      <Pressable
        dd-action-name="Stop View"
        onPress={() => {
          DdRum.stopView('DataDog').then(() => {
            console.log('Stop View');
          });
        }}>
        <Text>Stop View</Text>
      </Pressable>
    </View>
  );
};

export default DataDog;
