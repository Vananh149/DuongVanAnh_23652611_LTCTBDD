import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

type User = {
  id: number;
  name: string;
};

function filterByName<T extends { name: string }>(
  items: T[],
  keyword: string
): T[] {
  return items.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

const users: User[] = [
  { id: 1, name: 'Nguyen Van A' },
  { id: 2, name: 'Nguyen Van B' },
  { id: 3, name: 'le Van C' },
];

export default function App() {
  const [keyword, setKeyword] = useState<string>('');

  const result = filterByName(users, keyword);

  return (
    <View>
      <Text>Search User</Text>

      <TextInput
        placeholder="Nhập tên"
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={result}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  );
}