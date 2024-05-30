import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from './components/Header';
import Search from './components/Search';
import Ongoingtask from './components/Ongoingtask';
import Categories from './components/Categories';
export default function App() {
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <Header />
      <Search />
      <Categories/>    
      <Ongoingtask/>
     <StatusBar style="auto" />
    </View>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
