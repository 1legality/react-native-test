import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { API_URL } from 'react-native-dotenv'
import {
  NavigationParams, 
  NavigationScreenProp, 
  NavigationState
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class LoginScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {username : '', password: ''};
  }

  public static navigationOptions = {
    title: 'Login Screen',
  };

  render() {
    // const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here!"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text style={styles.text}>password</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here!"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
        />

        <Button
          title="Login"
          onPress={() => {
            login(this.state.username, this.state.password)
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    margin: 24
  },
  text: {
    fontSize: 20,
    padding: 10
  }
})

async function login(username: string, password: string) {
  try {
    console.log(`login in to ${API_URL}/login`)
    let response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    let authToken = await response.text(); // retrieve jwt token from server
    console.log(authToken);
  }
  catch (error) {
    console.log(error);
  }
}

export default LoginScreen;