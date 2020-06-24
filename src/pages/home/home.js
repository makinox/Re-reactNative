/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button, withTheme, Appbar, Avatar, Badge, ActivityIndicator, Banner} from 'react-native-paper';

const Home = ({theme}) => {
  const [visible, useVisible] = useState(true);
  const dismissBanner = () => useVisible(false);
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => dismissBanner(),
          },
          {
            label: 'Learn more',
            onPress: () => dismissBanner(),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4'}}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>

      <View style={styles.container}>
        <Text>Home!</Text>
        <Text style={{color: theme.colors.primary}}>Yo!</Text>
        <Button theme={{roundness: 3}} icon="camera">
          Press me
        </Button>
        <View>
          <Avatar.Icon size={24} icon="folder" />
        </View>
        <View>
          <Avatar.Text size={24} label="XD" />
        </View>
        <View>
          <Badge>3</Badge>
        </View>
        <View>
          <ActivityIndicator animating={true} color={'#61DAFB'} size={80} />
        </View>
        <View>
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(Home);
