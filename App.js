import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import  AuthLoadingScreen  from "./Screens/Auth/AuthLoading";
import  AuthStack  from "./Screens/Auth/LoginRegister/LoginRegister";
import  AppStack from "./Screens/Home/Home";





export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
