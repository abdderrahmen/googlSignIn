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