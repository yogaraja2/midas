import React from 'react';
import {
  BackHandler,
  View,
  StatusBar,
  LogBox,
} from 'react-native';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '_screens/SplashScreen';
import Home from '_screens/Home';
import AskAdvisor from '_screens/AskAdvisor';
import ChooseOption from '_screens/ChooseOption';
import SelectAvatar from '_screens/SelectAvatar';
import UserChoice from '_screens/UserChoice';
import SelectDream from '_screens/SelectDream';
import House from '_screens/House';
import Cars from '_screens/Cars';
import Dashboard from '_screens/Dashboard';
import Leaderboard from '_screens/Leaderboard';
import CarSelling from '_screens/CarSelling';
import BalanceSheet from '_screens/BalanceSheet';
import HouseSelling from '_screens/HouseSelling';
import CashFlow from '_screens/CashFlow';
import BalanceSheetDetails from '_screens/BalanceSheetDetails';
import CashFlowYears from '_screens/CashFlowYears';
import Web from '_screens/Web';
import DebtYears from '_screens/DebtYears';
import Signup from '_screens/Signup';
import Login from '_screens/Login';
import SelectRole from '_screens/SelectRole';

const App = () => {
  LogBox.ignoreAllLogs(true);
  return <View style={{ flex: 1 }}>
    <StatusBar backgroundColor='white' hidden={false} barStyle='dark-content' />
    <AppContainer />
  </View>;
};

export default App;

const AppNavigator = createStackNavigator({

  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  SelectRole: {
    screen: SelectRole,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Leaderboard: {
    screen: Leaderboard,
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
  UserChoice: {
    screen: UserChoice,
    navigationOptions: {
      header: null
    }
  },
  SelectDream: {
    screen: SelectDream,
    navigationOptions: {
      header: null
    }
  },
  House: {
    screen: House,
    navigationOptions: {
      header: null
    }
  },
  Cars: {
    screen: Cars,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  CashFlow: {
    screen: CashFlow,
    navigationOptions: {
      header: null
    }
  },
  BalanceSheet: {
    screen: BalanceSheet,
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
  CarSelling: {
    screen: CarSelling,
    navigationOptions: {
      header: null
    }
  },
  HouseSelling: {
    screen: HouseSelling,
    navigationOptions: {
      header: null
    }
  },
  BalanceSheetDetails: {
    screen: BalanceSheetDetails,
    navigationOptions: {
      header: null
    }
  },
  CashFlowYears: {
    screen: CashFlowYears,
    navigationOptions: {
      header: null
    }
  },
  DebtYears: {
    screen: DebtYears,
    navigationOptions: {
      header: null
    }
  },
  Web: {
    screen: Web,
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

