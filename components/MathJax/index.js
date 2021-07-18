import React from 'react';
import {Question} from './Question';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

export const Exam = ({questions}) => {
  return (
    <View style={styles.container}>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
