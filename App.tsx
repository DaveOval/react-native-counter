import React from 'react'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';

const App = () => {
  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor: "#28425B"
      }}>
      {/* <HolaMundoScreen/>
      <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App;
