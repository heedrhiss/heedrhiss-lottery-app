import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../utils/colors";

export default function RoundListComponent({roundNumber, guessNumber}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent Guess: {guessNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 6,    
        marginVertical: 4,
        padding: 8,
        borderRadius: 16,
        borderWidth: 1,
        width: '90%',
        borderColor: Colors.primary600,
        backgroundColor: Colors.accent500,        
    },
    text: {
        color: Colors.primary500,
        fontSize: 16,
    }
})