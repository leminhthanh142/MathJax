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
      'a) $x_1 = 0, x_2 = 3$',
      'b) $x_1 = -2, x_2 = 1$',
      'c) $x_1 = 0, x_2 = 4$',
      'd) $x_1 = 6, x_2 = 4$',
    ],
  },
  {
    id: 2,
    name: `Solve the linear equation
      $
        {1 \\over 5}(10x-20) = x-3
      $
    `,
    answers: ['a) ${-1}$', 'b) ${17}$', 'c) ${3}$', 'd) ${1}$'],
  },
  {
    id: 3,
    name: `Find the following sum
      $$
        7(3x^2 + 2x - 5) + 2(-x^2 + 3)
      $$
    `,
    answers: ['a) $20x^2 + 14x - 32$', 'b) $19x^2 + 2x$'],
  },
  {
    id: 4,
    name: `Write the following complex number in standard form $a + bi$
      $$
        \\frac{-24 + \\sqrt{-126}}{3}
      $$
    `,
    answers: ['a) $-8 + 14i$', 'b) $-8-i \\sqrt{14}$'],
  },
  {
    id: 5,
    name: `Perform the indicated operations. Write each answer using only
      positive exponents. Assume all variables represent positive real
      numbers
      $$
        {9m^{1/2} n^{3/2}} \\over {m^-7 n(m^3n)^{1/2}}
      $$
      `,
    answers: ['a) $9m^6$', 'b) $9m^6n^3$'],
  },
  {
    id: 6,
    name: `Solve the following inequality. Write the solution set in interval notation
      $$
        2 \\geq \\frac{5 -3x}{4} \\gt -3
      $$
    `,
    answers: ['a) $(-1, {17 \\over 3} )$', 'b) $(-1, {17 \\over 3} ]$'],
  },
  {
    id: 7,
    name: `Solve the following quadratic inequality. Write the solution set in interval notation
      $$
        x^2 - 2x - 35 \\lt 0
      $$
    `,
    answers: [
      'a) $(-\\infty, -5 ) \\cup (7, \\infty)$',
      'b) $(-\\infty, -5 ] \\cup [7, \\infty)$',
    ],
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
