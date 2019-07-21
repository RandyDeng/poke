import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import AuthLoadingScreen from 'app/auth/AuthLoading';
import SignInScreen from 'app/auth/SignInScreen';
import SignUpScreen from 'app/auth/SignUpScreen';
import ConfirmSignUp from 'app/auth/ConfirmSignUp';
import PokeScreen from 'app/screens/PokeScreen';


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: createStackNavigator({ Home: MainTabNavigator }),
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    ConfirmSignUp: ConfirmSignUp,
    PokeScreen: PokeScreen
  },
  {
    initialRouteName: 'PokeScreen',
  }
));