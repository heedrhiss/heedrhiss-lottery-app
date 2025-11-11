import { View, StyleSheet } from 'react-native'
import { Colors } from '../utils/colors'

export default function Card({children}) {
  return (
    <View style={styles.container}>{children}</View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        // backgroundColor: '#72036c',
        backgroundColor: Colors.primary600,
        padding: 16,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.8
       },
})