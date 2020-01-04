import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native';
import { ErrorMessage } from './ErrorMessage';

interface Props {
  children: any;
}

const config = Platform.select({
  ios: {
    behavior: 'padding',
    keyboardVerticalOffset: 80
  },
  android: {
    behavior: null,
    keyboardVerticalOffset: 0
  }
});

function Layout(props: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ErrorMessage />
      <KeyboardAvoidingView {...(config as any)} style={{ flex: 1 }}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Layout;
