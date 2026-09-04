import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

type Product = {
  id: number;
  title: string;
  price: number;
};

async function fetchProducts(
  keyword: string,
  limit: number
): Promise<Product[]> {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}`
  );

  const data = await response.json();

  return data.products as Product[];
}

export default function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  const searchProducts = async () => {
    const result = await fetchProducts(keyword, 10);
    setProducts(result);
  };

  return (
    <View>
      <Text>Product Search</Text>

      <TextInput
        placeholder="Nhập từ khóa"
        value={keyword}
        onChangeText={setKeyword}
      />

      <Button
        title="Tìm kiếm"
        onPress={searchProducts}
      />

      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}