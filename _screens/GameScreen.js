import { StyleSheet, Text, View } from "react-native";
import GameInterface from "../_components/GameInterface";

export default function GameScreen({confirmNumber, onGameOver}) {
  return (
    <View style={styles.screen}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>
        Heedrhiss Lottery
        </Text>
        </View>
        <GameInterface confirmNumber={confirmNumber} onGameOver={onGameOver}/>
    </View>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        marginTop: 36,
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
    }
})
