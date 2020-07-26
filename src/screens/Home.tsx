import 'react-native-gesture-handler';
import React, { PureComponent } from 'react';
import { Icon } from 'react-native-elements';
import ScreenTemplate from './ScreenTemplate';
import Header from '../components/Header';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import TabLayout from '../navigators/tobTabNavigator';

type Props = {
  navigation: NavigationDrawerProp;
};

export default class Home extends PureComponent<Props> {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Icon name="menu" type="simple-line-icon" color="#517fa4" />
    ),
  };

  render() {
    return (
      <ScreenTemplate>
        <Header
          title="Expense Manager"
          onPress={this.props.navigation.openDrawer}
        />
        <TabLayout />
      </ScreenTemplate>
    );
  }
}
