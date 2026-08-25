import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

const UserCard = ({ name, age, isAdmin }: UserCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Tuổi: {age}</Text>

      {isAdmin ? (
        <Text style={styles.admin}>👑 Quản trị viên</Text>
      ) : (
        <Text style={styles.user}>👤 Người dùng</Text>
      )}
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  admin: {
    color: 'red',
    marginTop: 5,
  },
  user: {
    color: 'blue',
    marginTop: 5,
  },
});