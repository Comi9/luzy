import React, {Component} from 'react';
import { SafeAreaView, View } from 'react-native';
import Login from './app/scenes/Login';

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#054993'}}>
        <View style={{flex: 1}}>
          <Login />
        </View>
      </SafeAreaView>
    );
  }
}
