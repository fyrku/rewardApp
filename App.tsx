import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { RecoilRoot } from 'recoil';

import MainScreen from './src/screens/main/Main';

const App = () => (
  <NativeBaseProvider>
    <SafeAreaView>
      <RecoilRoot>
        <MainScreen />
      </RecoilRoot>
    </SafeAreaView>
  </NativeBaseProvider>
);

export default App;
