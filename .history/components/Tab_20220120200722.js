import { View, Image, Text } from 'react-native';

export default function Tab({title, imgPath}) {
    const styles = {
        'tab': {
            flexDirection: 'column',
            alignItems: 'center',
        },
        'pic': {
            width: 70,
            height: 70,
          },
          description: 
    }
    return (
        <View styles={styles.tab}>
            <Image style = {styles.pic} source={require('../assets/Icons/discover_light.png')}/>
            <Text>{title}</Text>
        </View>
    );
}