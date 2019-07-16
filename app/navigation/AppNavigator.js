import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from 'app/screens/SignInScreen';
import SignUpScreen from 'app/screens/SignUpScreen';
import AuthLoadingScreen from 'app/screens/AuthLoading'


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