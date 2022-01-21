import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, TabBarIOS } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text>Navigation</Text>
      </View>
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
      <View style={styles.navigation}>
        <Text>Tabs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    backgroundColor: 'rgba(255, 0, 0, 1)',
  },
  content: {
    backgroundColor: 'rgba(0, 255, 0, 1)',
  },
  tabs: {
    backgroundColor: 'rgba(0, 0, 255, 1)',
  }
});
