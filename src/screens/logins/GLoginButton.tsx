import React, { Component } from 'react';
import { View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';

import { GOOGLE_IOS_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID } from 'react-native-dotenv'

export class GLoginButton extends Component {
  render() {
    return (
      <View>
        <Button
          title="Login with Google"
          onPress={() => {
            signInWithGoogleAsync()
          }}
        />
      </View>
    );
  }
}

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    console.log(result);

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}