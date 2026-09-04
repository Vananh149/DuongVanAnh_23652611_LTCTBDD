import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

type Product = {
  id: number;
  title: string;
  price: number;
};

interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const fetchProducts = async (currentPage: number) => {
    const limit = 10;
    const skip = (currentPage - 1) * limit;

    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );

    const result = await response.json();

    const data: ApiResponse<Product> = {
      data: result.products as Product[],
      total: result.total,
      page: currentPage,
    };

    setProducts(data.data);
    setTotal(data.total);
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <View>
      <Text>Product Pagination</Text>
      <Text>Page: {page}</Text>
      <Text>Total: {total}</Text>

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

      <Button
        title="Trang trước"
        onPress={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      />

      <Button
        title="Trang sau"
        onPress={() => {
          if (page * 10 < total) {
            setPage(page + 1);
          }
        }}
      />
    </View>
  );
}