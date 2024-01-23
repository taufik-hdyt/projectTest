Step ganti font default di React native paper UI

1. buat file react-native.config.js di root
   yang berisi ini 
    module.exports = {
    ...
    assets: [
      './assets/fonts'
    ],
    }
    
2. jalankan ini "npx react-native-asset"
3. terus ini "npx react-native link"

pada home root buat seperti ini


import React from 'react';

import {configureFonts, MD3LightTheme, PaperProvider} from 'react-native-paper';
import SplashScreen from './src/screens/SplashScreen';

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({
    config: {
      fontFamily: 'Sofia-Regular',
    },
    isV3: true,
  }),
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <SplashScreen />
    </PaperProvider>
  );
}

export default App;


note: 
setiap ada perubahan atau ingin menambahkan font pastikan selalu menjalankan
npx react-native-asset
