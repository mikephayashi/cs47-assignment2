import { View, Image, Text } from "react-native";

export default function Tab({ title, imgPath }) {
  const styles = {
    tab: {
      flexDirection: "column",
      alignItems: "center",
    },
    pic: {
      width: 70,
      height: 70,
    },
    description: {
      textAlign: "center",
      fontSize: 16,
      fontFamily: 'Sydney',
      color: 'white'
    },
  };
  return (
    <View styles={styles.tab}>
      <Image
        style={styles.pic}
        source={require("../assets/Icons/discover_light.png")}
      />
      <Text style={styles.description}>{title}</Text>
    </View>
  );
}
