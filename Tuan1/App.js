import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import CustomButton from './components/CustomButton'
import LiveInput from './components/LiveInput'
import LoadingWrapper from './components/LoadingWrapper'
import GenderSelector from './components/GenderSelector'
import ProgressBar from './components/ProgressBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <UserCard />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
