import React, { useEffect } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import Layout from '../components/Layout';
import { NavigationInjectedProps } from 'react-navigation';
import { RouteKeys } from '../resources/constants';

interface Props extends NavigationInjectedProps {}

function AuthLoadingScreen(props: Props) {
  useEffect(() => {
    AsyncStorage.getItem('userToken').then(userToken => {
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      props.navigation.navigate(userToken ? RouteKeys.App : RouteKeys.SignIn);
    });
  });

  return (
    <Layout>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} />
        <StatusBar barStyle="default" />
      </View>
    </Layout>
  );
}

export default AuthLoadingScreen;
