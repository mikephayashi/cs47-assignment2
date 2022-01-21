import { View, Image, Text } from 'react-native';

export default function Tab({title, imgPath}) {
    const styles = {
        'tab': {
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgb(255, 0, 0, 1)'
        },
        'pic': {
            width: 70,
            height: 70,
          },
    }
    return (
        <View styles={styles.tab}>
            <Image style = {styles.pic} source={require('../assets/Icons/discover_light.png')}/>
            <Text>{title}</Text>
        </View>
    );
}