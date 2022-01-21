import { View, Image, Text } from 'react-native';

export default function Tab({title, imgPath}) {
    const styles = {
        'tab': {

        },
        'pic': {
            width: 70,
            height: 70,
          },
    }
    return (
        <View styles=styles.tab>
            <Image style = {styles.tab} source={require('../assets/Icons/discover_light.png')}/>
        </View>
    );
}