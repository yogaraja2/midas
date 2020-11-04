/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  BackHandler,
  View,
  StatusBar,
  LogBox,
} from 'react-native';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '_screens/Home';
import AskAdvisor from '_screens/AskAdvisor';
import ChooseOption from '_screens/ChooseOption';
import SelectAvatar from '_screens/SelectAvatar';


const App = () => {
  LogBox.ignoreAllLogs(true);
  return <View style={{ flex: 1 }}>
    <StatusBar backgroundColor='white' hidden={false} barStyle='dark-content' />
    <AppContainer />
  </View>;
};

export default App;

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  AskAdvisor: {
    screen: AskAdvisor,
    navigationOptions: {
      header: null
    }
  },
  ChooseOption: {
    screen: ChooseOption,
    navigationOptions: {
      header: null
    }
  },
  SelectAvatar: {
    screen: SelectAvatar,
    navigationOptions: {
      header: null
    }
  },
});

const defaultGetStateForAction = AppNavigator.router.getStateForAction;

AppNavigator.router.getStateForAction = (action, state) => {
  const screen = state ? state.routes[state.index] : null;

  if (
    action.type === NavigationActions.BACK &&
    (screen.routeName == "Home")) {
    BackHandler.exitApp()
    return null;
  }
  return defaultGetStateForAction(action, state);
};

const AppContainer = createAppContainer(AppNavigator);

