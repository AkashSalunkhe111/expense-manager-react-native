import React, { PureComponent } from 'react';
import { View } from 'react-native';
import EText from './EText';

declare type props = {
  title: String;
  value: String;
  style?: object;
  textStyle?: object;
};

export default class Row extends PureComponent<props> {
  render() {
    const { style, title, value, textStyle } = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          ...style,
        }}>
        <View style={{ flexBasis: '70%' }}>
          <EText style={textStyle}> {title || ''} </EText>
        </View>
        <View>
          <EText style={textStyle}>{value || ''} </EText>
        </View>
      </View>
    );
  }
}
