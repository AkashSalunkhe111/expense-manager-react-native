import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import { colors } from '../config/constants';

type Props = {
  setAddExpenseMode: (mode: boolean) => void;
};

export default function FloatingAddButton({ setAddExpenseMode }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setAddExpenseMode(true)}>
      <Icon
        name="plus"
        type="font-awesome"
        size={25}
        color={colors.WHITE_300}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 62,
    height: 62,
    bottom: 80,
    right: 25,
    backgroundColor: colors.PURPLE_400,
  },
});
