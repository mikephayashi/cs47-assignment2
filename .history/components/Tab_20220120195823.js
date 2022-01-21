import { Text } from 'react-native';

export default function Tab({title, imgPath}) {
    const styles = {
        'tab': {
            width: 70,
            height: 70,
          },
    }
    return (
        <View styles={styles.tab}>
            <Text>Navigation</Text>
        </View>
    );
}