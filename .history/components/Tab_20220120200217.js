import { View, Image, Text } from 'react-native';

export default function Tab({title, imgPath}) {
    const styles = {
        'tabs': {
            flexDirection: 'row',
        },
        'tab': {
            flexDirection: 'column',
        },
        'pic': {
            width: 70,
            height: 70,
          },
    }
    return (
        <View styles={styles.tabs}>
            <View styles={styles.tab}>
                <Image style = {styles.pic} source={require({imgPath})}/>
                <Text>title</Text>
            </View>
        </View>
    );
}