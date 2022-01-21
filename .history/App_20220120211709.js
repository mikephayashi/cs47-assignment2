import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { useFonts } from "expo-font";
import { Themes } from "./assets/Themes";
import Tab from "./components/Tab";
import { reportLogBoxError } from "react-native/Libraries/LogBox/Data/LogBoxData";

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
        <Text style={{ fontSize: 32, fontFamily: "Sydney-Bold" }}>ensom</Text>
        <Image
          style={styles.navIcon}
          source={require("./assets/Icons/sun.png")}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profilePicContainer}>
          <Image
            style={styles.profilePic}
            resizeMode="contain"
            source={require("./assets/Profiles/mtl.jpg")}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
          
          </View>
        </View>
        <View style={styles.audioContainer}>
          <Text style={{ fontSize: 32, fontFamily: "Sydney" }}>
            My hottest take
          </Text>
          <View style={styles.audioIconsContainer}>
            <Image
              style={{ flex: 1 }}
              resizeMode="contain"
              source={require("./assets/Icons/player_light.png")}
            />
            <Image
              style={{ flex: 3 }}
              resizeMode="contain"
              source={require("./assets/Icons/audio_waveform_light.png")}
            />
          </View>
        </View>
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
    backgroundColor: "rgb(230, 230, 230)",
    alignItems: "stretch",
    justifyContent: "center",
  },
  navContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  contentContainer: {
    flex: 5,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
  tabsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgb(0, 0, 0)",
  },
  navIcon: {
    width: 50,
    height: 50,
  },
  profilePicContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
    flex: 2,
  },
  profilePic: {
    height: "100%",
    width: "100%",
    borderRadius: 25,
  },
  audioContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 40,
    borderRadius: 40,
  },
  audioIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
