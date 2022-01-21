import { View, Text } from 'react-native';

export default function Tab({title, imgPath}) {
    const styles = {
        'tab': {
            width: 70,
            height: 70,
          },
    }
    return (
        <View>
            <Image style = {styles.tab} source={require('../assets/Icons/discover_light.png')}/>
        </View>
    );
}