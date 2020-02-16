import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {
  NavigationParams, 
  NavigationScreenProp, 
  NavigationState
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends Component<Props> {
  public static navigationOptions = {
    title: 'Test Screen',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Welcome to my first React Native App</Text>
        <Button
          title="Login"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        {/* <Button
          title="Create account"
          onPress={() => {
            navigation.navigate('anotherTestScreen');
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    margin: 24
  }
})

export default HomeScreen;