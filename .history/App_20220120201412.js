import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { useFonts } from "expo-font";
import { Themes } from "./assets/Themes";
import Tab from "./components/Tab";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Image
          style={styles.navIcon}
          source={require("./assets/Icons/menu_light.png")}
        />
        <Text>ensom</Text>
        <Image
          style={styles.navIcon}
          source={require("./assets/Icons/sun.png")}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image styles={styles.profilePic}
            source={require("./assets/Profiles/mtl.jpg")}
          />
      </View>
      <View style={styles.tabsContainer}>
        <Tab title="Discover" imgPath="../assets/Icons/discover_light.png" />
        <Tab title="Matches" imgPath="../assets/Icons/heart_light.png" />
        <Tab title="DMs" imgPath="../assets/Icons/messages_light.png" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  navContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255, 0, 0, 1)",
  },
  contentContainer: {
    flex: 5,
    backgroundColor: "rgba(0, 255, 0, 1)",
  },
  tabsContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 255, 1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navIcon: {
    width: 50,
    height: 50,
  },
  profilePic: {
    marginLeft: 20,
    marginRight: 20,
  }
});
