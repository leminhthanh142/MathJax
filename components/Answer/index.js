import React from 'react';
import {View} from 'react-native';
import {MathJaxFormat} from '../MathJax';

export const Answer = ({answer}) => {
  return (
    <View>
      <MathJaxFormat mathJaxText={answer} />
    </View>
  );
};
