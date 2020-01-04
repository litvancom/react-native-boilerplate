import React from 'react';
import { StyleSheet } from 'react-native';
import AppContainer from './src/routing';
import { Provider as PaperProvider } from 'react-native-paper';
import { GlobalContextProvider } from './src/contexts/GlobalContext';
import { THEME } from './src/resources/constants';
import './src/resources/i18n';

export default function App() {
  return (
    <PaperProvider theme={THEME}>
      <GlobalContextProvider>
        <AppContainer />
      </GlobalContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
