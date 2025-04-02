import React from 'react';
import { View, Text } from 'react-native';
import TeamDropdown from './src/teamDropdown/components';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to GameOn</Text>
      <TeamDropdown />  {}
    </View>
  );
}