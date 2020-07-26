import React, { PureComponent } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { colors } from '../config/constants';

export default class ScreenTemplate extends PureComponent {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.BLACK_300 },
});
