/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {Exam} from './containers/Exam';

export const questions = [
  {
    id: 1,
    name: 'Given: $3x^2 + 4x + 5 = 0$',
    answers: [
      '$a) x_1 = 0, x_2 = 3$',
      '$b) x_1 = -2, x_2 = 1$',
      '$c) x_1 = 0, x_2 = 4$',
      '$d) x_1 = 6, x_2 = 4$',
    ],
  },
  {
    id: 2,
    name: '',
    answers: [],
  },
  {
    id: 3,
    name: '',
    answers: [],
  },
  {
    id: 4,
    name: '',
    answers: [],
  },
  {
    id: 5,
    name: '',
    answers: [],
  },
  {
    id: 6,
    name: '',
    answers: [],
  },
  {
    id: 7,
    name: '',
    answers: [],
  },
  {
    id: 8,
    name: '',
    answers: [],
  },
  {
    id: 9,
    name: '',
    answers: [],
  },
  {
    id: 10,
    name: '',
    answers: [],
  },
];

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="MathJax Test">Some equation:</Section>
          <Exam questions={questions} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
