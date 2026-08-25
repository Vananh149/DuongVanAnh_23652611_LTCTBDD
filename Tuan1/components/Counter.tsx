import { useState } from "react";
import {  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator, } from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);


 return (
  <View>
    <Text>Counter: {count}</Text>

    <Button title='tang' onPress={() => setCount(count + 1)} />
    <Button title='giam' onPress={() => setCount(count - 1)} />
  </View>
);
}


export default Counter;