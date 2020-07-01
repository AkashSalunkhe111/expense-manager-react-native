import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {colors} from '../config/colors';

export default class CustomDrawer extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.BLACK_700}}>
        <ScrollView>
          <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
            <DrawerNavigatorItems {...this.props as any} />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
