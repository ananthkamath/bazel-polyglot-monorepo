#!/usr/bin/env node

/**
 * App XYZ - A simple calculator and utility application
 */

const _ = require('lodash');
const axios = require('axios');
const minimist = require('minimist');
const fetch = require('node-fetch');
const ansiRegex = require('ansi-regex');

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  squareRoot(num) {
    if (num < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(num);
  }
}

class StringUtils {
  static reverse(str) {
    return str.split('').reverse().join('');
  }

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
  }
}

function runCalculatorDemo() {
  console.log('\n📊 Calculator Demo:');
  console.log('-'.repeat(40));
  
  const calc = new Calculator();
  
  console.log('Addition: 15 + 7 =', calc.add(15, 7));
  console.log('Subtraction: 20 - 8 =', calc.subtract(20, 8));
  console.log('Multiplication: 6 * 9 =', calc.multiply(6, 9));
  console.log('Division: 100 / 4 =', calc.divide(100, 4));
  console.log('Power: 2^10 =', calc.power(2, 10));
  console.log('Square Root: √144 =', calc.squareRoot(144));
}

function runStringUtilsDemo() {
  console.log('\n📝 String Utils Demo:');
  console.log('-'.repeat(40));
  
  const testString = 'hello world';
  console.log('Original:', testString);
  console.log('Reversed:', StringUtils.reverse(testString));
  console.log('Capitalized:', StringUtils.capitalize(testString));
  console.log('Vowel count:', StringUtils.countVowels(testString));
}

function main() {
  console.log('='.repeat(50));
  console.log('🚀 Application XYZ Starting...');
  console.log('='.repeat(50));
  
  // Parse command line arguments using minimist
  const args = minimist(process.argv.slice(2));
  
  console.log('\n📋 System Information:');
  console.log('-'.repeat(40));
  console.log('Node version:', process.version);
  console.log('Platform:', process.platform);
  console.log('Architecture:', process.arch);
  console.log('Current directory:', process.cwd());
  console.log('Dependencies loaded: lodash, axios, minimist, node-fetch, ansi-regex');
  
  // Using lodash to demonstrate dependency
  const numbers = [10, 20, 30, 40, 50];
  console.log('Lodash sample - Sum:', _.sum(numbers));
  console.log('Lodash sample - Mean:', _.mean(numbers));
  
  const mode = args._[0];
  
  if (mode === 'calculate') {
    runCalculatorDemo();
  } else {
    runCalculatorDemo();
    runStringUtilsDemo();
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Application XYZ Completed Successfully!');
  console.log('='.repeat(50));
}

if (require.main === module) {
  main();
}

module.exports = { Calculator, StringUtils };

