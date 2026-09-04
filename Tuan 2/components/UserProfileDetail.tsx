import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setUser(data as User);
      });
  }, []);

  if (user === null) {
    return <View />;
  }

  return (
    <View>
      <Text>User Profile</Text>
      <Text>ID: {user?.id}</Text>
      <Text>Name: {user?.name}</Text>
      <Text>Username: {user?.username}</Text>
      <Text>Email: {user?.email}</Text>
    </View>
  );
}