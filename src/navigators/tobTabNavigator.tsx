import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import CreateExpense from '../screens/CreateExpense';
import MonthlyRecord from '../screens/MonthlyRecord';
import {colors, fontSize} from '../config/constants';

const MainTabs = createMaterialTopTabNavigator(
  {
    CreateExpense: {
      screen: CreateExpense,
    },
    MonthlyRecord: {
      screen: MonthlyRecord,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.WHITE_300,
      inactiveTintColor: colors.GRAY_400,
      tabStyle: {
        backgroundColor: colors.BLACK_300,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.WHITE_300,
        borderTopColor: colors.WHITE_300,
      },
      labelStyle: {
        fontSize: fontSize.md,
      },
    },
  },
);

const TabLayout = createAppContainer(MainTabs);

export default TabLayout;
