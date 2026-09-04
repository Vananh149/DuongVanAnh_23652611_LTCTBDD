import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchPosts = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const data = await response.json();

    setPosts(data as Post[]);
  };

  const onRefresh = async () => {
    setRefreshing(true);

    await fetchPosts();

    setRefreshing(false);
  };

  useEffect(() => {
    fetchPosts();
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
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
}