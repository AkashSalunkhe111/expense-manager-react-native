import React, { PureComponent } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import EText from './EText';
import { colors } from '../config/constants';

type Props = {
  date: string;
  incrementDate: () => void;
  decrementDate: () => void;
};

export default class Date extends PureComponent<Props> {
  render() {
    const { date, incrementDate, decrementDate } = this.props;
    return (
      <View style={styles.dateContainer}>
        <TouchableOpacity
          onPress={decrementDate}
          hitSlop={{ right: 15, left: 15, top: 10, bottom: 10 }}>
          <Icon
            name="arrow-left"
            type="font-awesome"
            size={20}
            color={colors.WHITE_300}
          />
        </TouchableOpacity>
        <View>
          <EText style={styles.dateText}>{date}</EText>
        </View>
        <TouchableOpacity
          onPress={incrementDate}
          hitSlop={{ right: 15, left: 15, top: 10, bottom: 10 }}>
          <Icon
            name="arrow-right"
            type="font-awesome"
            size={20}
            color={colors.WHITE_300}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: colors.PURPLE_400,
    paddingVertical: 10,
  },
  dateText: { fontWeight: '700' },
});
