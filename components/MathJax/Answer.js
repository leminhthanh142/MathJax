import React from 'react';
import MathJax from 'react-native-mathjax';
import {View} from 'react-native';
import {MathJaxOptions} from './mathJaxOptions';

export const Answer = ({answer}) => {
  return (
    <View>
      <MathJax html={answer} mathJaxOptions={MathJaxOptions} />
    </View>
  );
};
