import { Text, View, StyleSheet, Pressable } from "react-native";
import { Colors } from "../utils/colors";

export default function Button({children, onPress}) {
  return (
    <View style={styles.buttonOuter}>
      <Pressable style={({pressed})=>
        pressed ? [styles.buttonInner, styles.pressed] : styles.buttonInner
    } android_ripple={{color: '#ffffff'}} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuter: {
    flex: 1,    
    margin: 8,    
  },
  buttonInner: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: Colors.primary500,
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})