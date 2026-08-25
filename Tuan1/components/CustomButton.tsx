import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MyButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

const MyButton = ({
  label,
  onPress,
  color = 'blue',
}: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});