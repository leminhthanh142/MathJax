import React from 'react';
import MathJax from 'react-native-mathjax';
import {Text, View} from 'react-native';
import {MathJaxOptions} from './mathJaxOptions';
import {Answer} from './Answer';
import {StyleSheet} from 'react-native';

export const Question = ({question}) => {
  return (
    <View style={styles.questionContainer}>
      <View>
        <Text>Question {question.id}: </Text>
        <MathJax html={question.name} mathJaxOptions={MathJaxOptions} />
      </View>
      <View>
        {question.answers.map((answer, idx) => (
          <Answer key={idx} answer={answer} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    marginTop: 20,
  },
});
