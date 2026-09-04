import React from 'react';
import { View, Button, Alert } from 'react-native';

type CustomError = {
  message: string;
  status: number;
};

function isCustomError(error: unknown): error is CustomError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'status' in error
  );
}

export default function App() {
  const callAPI = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/abcxyz'
      );

      if (!response.ok) {
        const error: CustomError = {
          message: 'Không tìm thấy dữ liệu',
          status: response.status,
        };

        throw error;
      }
    } catch (error: unknown) {
      if (isCustomError(error)) {
        Alert.alert(
          'Lỗi API',
          `${error.message}\nStatus: ${error.status}`
        );
      } else {
        Alert.alert('Lỗi', 'Đã xảy ra lỗi');
      }
    }
  };

  return (
    <View>
      <Button
        title="Gọi API"
        onPress={callAPI}
      />
    </View>
  );
}