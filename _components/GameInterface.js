import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Colors } from "../utils/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from "./Button";
import Card from "./Card";
import RoundListComponent from "./RoundListComponent";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

export default function GameInterface({confirmNumber, onGameOver}) {
  let min = 1;
  let max = 20;
  const initialNumber = generateRandomBetween(1, 20, confirmNumber)
  const [curNum, setCurNum] = useState(initialNumber)
  const [roundsEntry, setRoundsEntry] = useState([initialNumber]);

  useEffect(()=>{
    if(confirmNumber === curNum) onGameOver(roundsEntry.length)
    min = 1;
    max = 20;
  }, [confirmNumber, curNum, onGameOver])

  const handleChange = (direction)=> {
    if(direction === 'lower' && curNum < confirmNumber || direction === 'higher' && curNum > confirmNumber){
        Alert.alert('Wrong Hint', 'You\'r Lying, Hint direction is not correct', [{style: 'cancel', text: 'Close'}])
        return
    }
    if(direction === 'lower'){
    max = curNum
    }else{
    min = curNum + 1
    }
    const newGenNumb = generateRandomBetween(min, max, curNum)
    setCurNum(newGenNumb)
    setRoundsEntry(cur => [newGenNumb, ...cur]) 
  }
  const roundNumber = roundsEntry.length

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{curNum}</Text>
      </View>
      <Card>
      <Text style={styles.text2}>Hint direction</Text>  
      <View style={styles.buttonContainer}>
        <Button onPress={handleChange.bind(this, 'lower')}>
        <Ionicons name="remove" size={24} color="white" />
        </Button>
        <Button onPress={handleChange.bind(this, 'higher')}>
        <Ionicons name="add" size={24} color="white" />
        </Button>
      </View>
      </Card>
      <View style={styles.listContainer}>
      <FlatList data={roundsEntry} renderItem={(itemData)=>
        <RoundListComponent roundNumber={roundNumber - itemData.index} guessNumber={itemData.item}/> }
         />
      </View>     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',        
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        fontSize: 32,
        fontWeight: 'bold',
        borderColor: Colors.accent500,
        borderWidth: 4,
        borderRadius: 8,
        width: '90%',
        margin: 24,
    },
    text: {       
        fontSize: 32,
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    text2: {
        color: Colors.accent500,
        fontSize: 20,
        marginBottom: 8,
        fontFamily: 'open-sans'
    },
    listContainer: {
      height: 380,
      padding: 6,
      alignItems: 'flex-start'
    }
})
