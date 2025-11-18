import { TextInput, View, StyleSheet, Text, Alert } from "react-native";
import Button from "../_components/Button";
import { useState } from "react";
import { Colors } from "../utils/colors";
import Card from "../_components/Card";

export default function StartGame({setNumber}) {
  const [inputNumber, setInputNumber] = useState('')

  function handleSubmit(){    
    const chosenNumber = parseInt(inputNumber)
    
    if(isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 20){
      Alert.alert('Invalid Number', 'Input must be a valid number between 1 - 20', [{text: 'Dismiss', style: 'destructive', onPress: resetInput}])
      resetInput()
      return
    }else{
      setNumber(chosenNumber)
      resetInput()
    }
  }

  function resetInput(){
    setInputNumber('')
  }

  return (
    <View>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Heedrhiss Lottery
        </Text>
      </View>
    
    <Card>
      <Text style={styles.text}>Enter a number</Text>     
        <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" value={inputNumber} onChangeText={(number)=>  setInputNumber(number)}/>
        <View style={styles.buttonContainer}>
            <Button onPress={resetInput}>Reset</Button>
            <Button onPress={handleSubmit}>Confirm</Button>
        </View>
    </Card>
    </View>
  )
}

const styles = StyleSheet.create({
   
   input: {
    height: 50,
    width: 55,
    padding: 8,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold'
   },
   buttonContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around'
   },
   title: {       
    textAlign: 'center',
    color: 'white',
    padding: 12,
    fontSize: 24,
    fontFamily: 'open-sans-bold'
},
titleContainer: {
  borderColor: 'white',
  borderWidth: 4,
  marginTop: 48,
  marginHorizontal: 20
  },
  text: {
    color: Colors.accent500,
    fontSize: 20,
    fontFamily: 'open-sans'
  }
    
})