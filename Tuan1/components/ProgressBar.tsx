import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressProps {
  progress: number;
}

const Progress = ({ progress }: ProgressProps) => {
  // Kiểm tra giá trị phải nằm trong 0 - 100
  if (progress < 0 || progress > 100) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          Lỗi: Progress phải nằm từ 0 đến 100
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tiến độ: {progress}%
      </Text>

      {/* Thanh nền */}
      <View style={styles.progressBackground}>
        {/* Thanh tiến trình */}
        <View
          style={[
            styles.progress,
            {
              width: `${progress}%`,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  progressBackground: {
    width: '100%',
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progress: {
    height: '100%',
    backgroundColor: 'blue',
  },

  error: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});