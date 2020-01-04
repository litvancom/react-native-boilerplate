import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import OtherScreen from '../screens/OtherScreen';
import { RouteKeys } from '../resources/constants';
import SignUpScreen from '../screens/SignUpScreen';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({
  [RouteKeys.Home]: HomeScreen,
  [RouteKeys.Other]: OtherScreen
});
const AuthStack = createStackNavigator({
  [RouteKeys.SignIn]: SignInScreen,
  [RouteKeys.SignUp]: SignUpScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      [RouteKeys.AuthLoading]: AuthLoadingScreen,
      [RouteKeys.App]: AppStack,
      [RouteKeys.Auth]: AuthStack
    },
    {
      initialRouteName: RouteKeys.AuthLoading
    }
  )
);
