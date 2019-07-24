import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import AuthLoadingScreen from 'app/auth/AuthLoading';
import SignInScreen from 'app/auth/SignInScreen';
import SignUpScreen from 'app/auth/SignUpScreen';
import ConfirmSignUp from 'app/auth/ConfirmSignUp';
import PokeScreen from 'app/screens/PokeScreen';
import SendPokes from 'app/screens/SendPokes';
import ViewPokes from 'app/screens/ViewPokes';


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: createStackNavigator({ Home: MainTabNavigator }),
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    ConfirmSignUp: ConfirmSignUp,
    PokeScreen: PokeScreen,
    SendPokes: SendPokes,
    ViewPokes: ViewPokes
  },
  {
    initialRouteName: 'App',
  }
));