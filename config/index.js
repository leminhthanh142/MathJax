export default {
  mathjax: {
    jax: ['input/TeX', 'output/SVG'],
    loader: {load: ['[tex]/textmacros']},
    tex: {packages: {'[+]': ['textmacros']}},
    displayMath: [
      ['\\\\[', '\\\\]'],
      ['\\[', '\\]'],
    ],
  },
};
