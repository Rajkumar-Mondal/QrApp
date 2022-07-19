import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        placeholder="Type here to translate to Qr code!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      {text ?
        <QRCode
          value={text}
        /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  }
});
