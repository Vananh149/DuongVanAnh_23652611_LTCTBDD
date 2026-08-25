import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Gender =
  | 'male'
  | 'female'
  | 'other';

const GenderSelector = () => {
  const [gender, setGender] =
    useState<Gender>('other');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Chọn giới tính
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setGender('male')}
      >
        <Text>Nam</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setGender('female')}
      >
        <Text>Nữ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setGender('other')}
      >
        <Text>Khác</Text>
      </TouchableOpacity>

      <Text style={styles.result}>
        Giới tính: {gender}
      </Text>
    </View>
  );
};

export default GenderSelector;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  button: {
    padding: 15,
    backgroundColor: '#ddd',
    marginBottom: 10,
    borderRadius: 8,
  },

  result: {
    marginTop: 15,
    fontSize: 18,
  },
});