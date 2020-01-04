import { DefaultTheme } from 'react-native-paper';

export enum RouteKeys {
  AuthLoading = 'AuthLoading',
  App = 'App',
  Auth = 'Auth',
  Home = 'Home',
  Other = 'Other',
  SignIn = 'SignIn',
  SignUp = 'SignUp'
}

export const THEME = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0f4fdb',
    accent: '#f1c40f'
  }
};
