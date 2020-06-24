/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Appbar, Avatar, Button, Card, Title, Paragraph, Dialog, Portal} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default () => {
  const [visible, useVisible] = useState(false);
  const dismissBanner = () => useVisible(false);
  const showBanner = () => useVisible(true);
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Settings" subtitle={'Subtitle'} />
      </Appbar.Header>
      <ScrollView>
        <View>
          <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
              <Title>Esto es un titulo</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
        <View>
          <Button mode="contained" onPress={showBanner}>
            Show Dialog
          </Button>
          <Portal>
            <Dialog visible={visible} onDismiss={dismissBanner}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>This is simple dialog</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={dismissBanner}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </ScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
