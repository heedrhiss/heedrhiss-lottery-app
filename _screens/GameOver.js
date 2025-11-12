import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../utils/colors'
import Button from '../_components/Button'

export default function GameOver() {
  return (
    <View style={styles.screen}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>
        Game Over
        </Text>
        </View>   
        <View style={styles.imageCont}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
        </View>  
        <Text style={styles.text}>Your phone guessed <Text style={styles.highlight}>X</Text> number of times to predict <Text style={styles.highlight}>Y</Text>.</Text>  
        <Button>Start New Game</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        marginTop: 36,
        alignItems: 'center',
      justifyContent: 'center'
    },
    titleContainer: {
    borderColor: 'white',
    borderWidth: 4,
    },
    title: {       
      textAlign: 'center',
      color: 'white',
      padding: 12,
      fontSize: 24,
      fontFamily: 'open-sans-bold'
    },
    imageCont: {
      height: 300,
      width: 300,
      borderRadius: 150,
      borderColor: Colors.primary600,
      borderWidth: 3,
      overflow: 'hidden',
      marginVertical: 30,      
    },
    image: {
      height: '100%',
      width: '100%',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'open-sans',
      marginBottom: 12,
    },
    highlight: {
      fontFamily: 'open-sans-bold',
      color: Colors.primary500
    }
})
