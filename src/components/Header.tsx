import 'react-native-gesture-handler';
import React, { PureComponent } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fontSize } from '../config/constants';

type props = {
  title: string;
  onPress: () => any;
};

export default class Header extends PureComponent<props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.iconContainer}>
          <Icon
            name="menu"
            type="simple-line-icon"
            size={22}
            color={colors.WHITE_300}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.BLACK_700,
    padding: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  text: {
    color: colors.WHITE_300,
    fontSize: fontSize.lg,
  },
});
