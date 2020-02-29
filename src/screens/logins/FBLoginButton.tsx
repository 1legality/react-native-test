import React, { Component } from 'react';
import { View, Button } from 'react-native';
import * as Facebook from 'expo-facebook';

import { FACEBOOK_APP_ID } from 'react-native-dotenv'

export class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <Button
          title="Login with Facebook"
          onPress={() => {
            login()
          }}
        />
      </View>
    );
  }
}

async function login() {
    try {
        await Facebook.initializeAsync(FACEBOOK_APP_ID);
        const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
        });
        if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
        // type === 'cancel'
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}