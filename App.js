import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


export default function App() {

  const signIn = () => {
    console.log('cc')
  }
  
  return (
    <View style={styles.container}>
      <Text>
        Hello World
      </Text>

      <GoogleSigninButton
       style={{ width: 192, height: 48 }}
       size={GoogleSigninButton.Size.Wide}
       color={GoogleSigninButton.Color.Dark}
       onPress={signIn}
       //disabled={this.state.isSigninInProgress}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});