import { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import StartGame from './_screens/StartGame';
import GameScreen from './_screens/GameScreen';
import GameOver from './_screens/GameOver';


export default function App() {
  const [confirmNumber, setConfirmNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  function handleGameOver(){
    setGameOver(true)
  }

  let screen = <StartGame setNumber={(value)=> {
    setConfirmNumber(value)
    setGameOver(false)
  }}/>

  if(confirmNumber) screen = <GameScreen confirmNumber={confirmNumber} onGameOver={handleGameOver}/>

  if(gameOver && confirmNumber) screen = <GameOver/>

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground source={require('./assets/images/bg.jpg')}
      style={styles.container} resizeMode='cover' imageStyle={styles.bg}>
      <SafeAreaView style={styles.container}>
      {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,         
  },
  bg: {
    opacity: 0.15
  }
  
});
