import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

interface LoadingContainerProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoadingContainer = ({
  isLoading,
  children,
}: LoadingContainerProps) => {

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
        />

        <Text>
          Đang tải...
        </Text>
      </View>
    );
  }

  return (
    <View>
      {children}
    </View>
  );
};

export default LoadingContainer;

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});