import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

const LiveInput = () => {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Input</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập nội dung..."
        value={text}
        onChangeText={(value: string) => setText(value)}
      />

      <Text style={styles.count}>
        Số ký tự: {text.length}
      </Text>
    </View>
  );
};

export default LiveInput;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },

  count: {
    fontSize: 18,
  },
});