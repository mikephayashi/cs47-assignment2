import { View, Image, Text } from 'react-native';

export default function Tab({title, imgPath}) {
    const styles = {
        'tabs': {
            'flex'
        },
        'tab': {
            flexDirection: 'column'
        },
        'pic': {
            width: 70,
            height: 70,
          },
    }
    return (
        <View>
            <View styles={styles.tab}>
                <Image style = {styles.pic} source={require('../assets/Icons/discover_light.png')}/>
            </View>
        </View>
    );
}