import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import NewsFeed from './components/NewsFeed';
import UserProfileDetail from './components/UserProfileDetail'
import FilteredListGeneric from './components/FilteredListGeneric'
import PulltoRefresh from './components/PulltoRefresh'
import ProductSreachAPI from './components/ProductSearchAPI'
import PaginationResponse from './components/PaginationResponse'
import APIErrorHandling from './components/APIErrorHandling'

export default function App() {
  return (
    <View>
      <Card>
        < NewsFeed />
      </Card>
    </View>
  );
}


