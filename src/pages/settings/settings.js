import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

export default () => (
  <>
    <Appbar.Header>
      <Appbar.Content title="Settings" subtitle={'Subtitle'} />
    </Appbar.Header>
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
