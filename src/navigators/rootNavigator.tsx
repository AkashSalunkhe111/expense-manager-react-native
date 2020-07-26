import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomDrawer from '../components/CustomDrawer';
import MainTabs from './tobTabNavigator';
import Home from '../screens/Home';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    contentComponent: CustomDrawer as any,
  },
);

export default DrawerNavigator;
