import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { colors } from '../config/constants';

export default class CustomDrawer extends Component {
  render() {
    return (
      <View style={styles.drawerContainer}>
        <ScrollView>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerNavigatorItems {...this.props as any} />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: { flex: 1, backgroundColor: colors.BLACK_700 },
});
