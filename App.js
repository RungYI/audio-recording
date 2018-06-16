import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Audio } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  _handlePlaySoundAsync = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({
      uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
    });
    await sound.playAsync();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          划龍舟加油軟體
        </Text>
        <Button
          title="加油！加油！加油！"
          onPress={this._handlePlaySoundAsync}
        />
        <Card title="Local Modules">
          <AssetExample />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
