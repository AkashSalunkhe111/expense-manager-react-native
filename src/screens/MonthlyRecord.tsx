import 'react-native-gesture-handler';
import React, {PureComponent} from 'react';
import {NavigationDrawerProp} from 'react-navigation-drawer';
import ScreenTemplate from './ScreenTemplate';
import EText from '../components/EText';

type Props = {
  navigation: NavigationDrawerProp;
};

export default class MonthlyRecord extends PureComponent<Props> {
  static navigationOptions = {
    title: 'Monthly',
  };

  render() {
    return (
      <ScreenTemplate>
        <EText>Monthly</EText>
      </ScreenTemplate>
    );
  }
}
