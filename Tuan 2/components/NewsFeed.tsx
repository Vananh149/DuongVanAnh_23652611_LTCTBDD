import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data as Post[]);
      });
  }, []);

  return (
    <View>
      <Text>News Feed</Text>

      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}