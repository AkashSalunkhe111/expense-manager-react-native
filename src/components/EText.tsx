import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors, fontSize } from '../config/constants';

type Props = {
  children: React.ReactNode;
  size?: string;
  style?: object;
};

export default function EText({ children, size, style }: Props) {
  return (
    <Text
      style={{
        color: colors.WHITE_300,
        fontSize: fontSize[size] || fontSize.sm,
        ...style,
      }}>
      {children}
    </Text>
  );
}
