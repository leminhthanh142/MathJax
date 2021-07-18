import React from 'react';
import {Text, View} from 'react-native';
import {Answer} from '../Answer';
import {MathJaxFormat} from '../MathJax';
import {StyleSheet} from 'react-native';

export const Question = ({question}) => {
  return (
    <View style={styles.questionContainer}>
      <View>
        <Text>Question: {question.id}: </Text>
        <MathJaxFormat mathJaxText={question.name} />
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
