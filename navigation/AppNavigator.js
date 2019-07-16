import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import AuthLoadingScreen from './AuthLoading'


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: createStackNavigator({ Home: MainTabNavigator }),
    SignIn: SignInScreen ,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));