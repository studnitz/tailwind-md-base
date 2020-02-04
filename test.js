/* eslint-disable */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const tailwindRebase = require('./src/index');

test('it generates all the classes', () => {
  const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
  const input = fs.readFileSync(inputPath, 'utf8');

  return postcss(tailwindcss('./tailwind.config.js'))
    .process(input, { from: inputPath })
    .then(result => {
      const expected = fs.readFileSync(
        path.resolve(`${__dirname}/stubs/output.css`),
        'utf8',
      );

      expect(result.css).toBe(expected);
    });
});

