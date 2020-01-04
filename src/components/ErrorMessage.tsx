import { useGlobalContextDispatch, useGlobalContextState } from '../contexts/GlobalContext';
import { Banner, Text, useTheme } from 'react-native-paper';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

export function ErrorMessage() {
  const { error } = useGlobalContextState();
  const dispatch = useGlobalContextDispatch();

  const theme = useTheme();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch({ type: 'error', error: undefined });
      }, 3000);
    }
  }, [error]);

  const errorText: any = <Text style={{ color: 'white' }}>{error}</Text>;

  return (
    <Banner style={[styles.banner, { backgroundColor: theme.colors.error }]} visible={!!error} actions={[]}>
      {errorText}
    </Banner>
  );
}

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    zIndex: 1000,
    width: '100%'
  }
});
