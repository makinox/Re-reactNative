import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, withTheme, Appbar} from 'react-native-paper';

const Home = ({theme}) => (
  <>
    <Appbar.Header>
      <Appbar.Content title="Home" subtitle={'Subtitle'} />
    </Appbar.Header>

    <View style={styles.container}>
      <Text>Home!</Text>
      <Text style={{color: theme.colors.primary}}>Yo!</Text>
      <Button theme={{roundness: 3}} icon="camera">
        Press me
      </Button>
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

export default withTheme(Home);
