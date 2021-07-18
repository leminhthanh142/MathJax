import React from 'react';
import {View} from 'react-native';
import MathJax from 'react-native-mathjax';
import config from '../../config';

export const MathJaxFormat = ({mathJaxText}) => {
  return (
    <View>
      <MathJax html={mathJaxText} mathJaxOptions={config.mathjax} />
    </View>
  );
};
