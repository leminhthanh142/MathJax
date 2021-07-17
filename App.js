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
import MathJax from 'react-native-mathjax';

import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

const CustomMathJax = ({text}) => {
  return (
    <MathJax
      html={text}
      mathJaxOptions={{
        jax: ['input/TeX', 'output/SVG'],
        loader: {load: ['[tex]/textmacros']},
        tex: {packages: {'[+]': ['textmacros']}},
        displayMath: [
          ['\\\\[', '\\\\]'],
          ['\\[', '\\]'],
        ],
      }}
    />
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
          <View>
            <CustomMathJax
              text={
                'Equation: $ax^2 + bx + c = 0 \\implies x = {-b \\pm \\sqrt{b^2 - 4ac} \\over 2a}$'
              }
            />
          </View>
          <View>
            <CustomMathJax
              text={`Suppose we are given a numerical method for solving $v_t = f(v,t)$, which are in the following form
                $$v^{n+1} = N(v^{n+1}, v^n, v^{n+1}, \\dots, {\\Delta t})$$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={
                '$$\\sum_{i=0}^n i^2 = \\left(\\frac{(n^2+n)^{2^n-1}(2n+1)^n}{6} \\right) + \\frac{3}{4} $$'
              }
            />
          </View>
          <View>
            <CustomMathJax
              text={
                '$$\\sqrt[3]{x^3}-\\frac{x}{y} \\left|x\\right| \\int {(x+3)^{n+1} \\over y}$$'
              }
            />
          </View>
          <View>
            <CustomMathJax text={'$$\\Delta = b^2 - 4ac$$'} />
          </View>
          <View>
            <CustomMathJax
              text={`$$
              \\begin{matrix}
                1 & x & y^2 \\\\
                1 & y & y^2 \\\\
                1 & z & z^2 \\\\
              \\end{matrix}
              $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$
                \\begin{bmatrix}
                  1 & x & y^2 \\\\
                  1 & y & y^2 \\\\
                  1 & z & z^2 \\\\
                \\end{bmatrix}
                $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$
              \\begin{matrix}
                a_1 & a_1^2 & a_1^3 & \\cdots & a_1^n \\\\
                a_2 & a_2^2 & a_3^3 & \\cdots & a_2^n \\\\
                \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\
                a_m & a_m^2 & a_m^3 & \\cdots &a_m^n
              \\end{matrix}
              $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$
              \\left[
                \\begin{array}{cc|c}
                1 & 2 & 3 \\\\
                4 & 5 & 6
                \\end{array}
              \\right]
              $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$
              \\begin{pmatrix}
                a & b \\\\
                \\hline
                c & d
              \\end{pmatrix}
                $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$\\begin{align}
                \\sqrt{37} & = \\sqrt{\\frac{73^-1}{12^2}} \\\\
                & = \\sqrt{\\frac{73^2}{12^2}.\\frac{73^-1}{73^2}}\\\\
                & = \\sqrt{\\frac{73^2}{12^2}}.\\sqrt{\\frac{73^2-1}{73^2}} \\\\
                & = {73\\over 12} \\sqrt{1-{1 \\over 73^2}} \\\\
                & \\approx {73 \\over 12} \\left(1-\\frac{1}{2.73^2}\\right)
                \\end{align}
                $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$\\begin{align}
                f(x) &= (x^3) + 3x^2 + 4x + 6 \\\\
                f'(x) &= 3x^2 + 6x + 4 \\\\
                f''(x) &= 6x + 6 \\\\              
                \\end{align}
                $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$
              f(n) = 
              \\begin{cases}
              n/2,    &\\text{if $n$ is even} \\\\[2ex]
              3n+1,   &\\text{if $n$ is odd} \\\\
              \\end{cases}
                $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$
              \\begin{array}{c|lcr}
              n & \\text{Left} & \\text{Center} & \\text{right} \\\\
              \\hline
                1 & 0.24 & 1 & 125 \\\\
                2 & -1 & 189 & -8 \\\\
                3 & -20 & 2000 & 1+10i
              \\end{array}
                $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$
              \\left\\{x\\middle | \\frac{x^2}{2} \\in \\mathbb{R}\\right\\}
                $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$ 
                  \\left\\{ 
                    \\begin{array}{l}
                      0 = c_x-a_{x0}-d_{x0}\\dfrac{(c_x-a_{x0})\\cdot d_{x0}}{\\|d_{x0}\\|^2} \\\\[2ex] 
                      0 = c_y-a_{y0}-d_{y0}\\dfrac{(c_y-a_{y0})\\cdot d_{y0}}{\\|d_{y0}\\|^2} 
                    \\end{array} 
                  \\right.
                    $$`}
            />
          </View>
          <View>
            <CustomMathJax
              text={`$$ 
                  \\underbrace{a\\cdot a \\cdots a}_{b\\text{ times}}
                    $$`}
            />
          </View>
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
