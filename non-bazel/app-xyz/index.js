#!/usr/bin/env node

/**
 * App XYZ - A simple calculator and utility application
 */

const _ = require('lodash');
const axios = require('axios');
const minimist = require('minimist');
const fetch = require('node-fetch');
const ansiRegex = require('ansi-regex');
const tar = require('tar');
const jwt = require('jsonwebtoken');
const express = require('express');
const ejs = require('ejs');
const Handlebars = require('handlebars');
const underscore = require('underscore');
const yargsParser = require('yargs-parser');
const serialize = require('serialize-javascript');
const forge = require('node-forge');
const globParent = require('glob-parent');

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

function runTemplateDemo() {
  console.log('\n🎨 Template Engine Demo:');
  console.log('-'.repeat(40));
  
  // Handlebars template
  const hbsTemplate = Handlebars.compile('Result: {{value}}');
  console.log('Handlebars:', hbsTemplate({ value: 42 }));
  
  // EJS template
  const ejsResult = ejs.render('Result: <%= value %>', { value: 42 });
  console.log('EJS:', ejsResult);
  
  // Underscore template
  const underscoreTemplate = underscore.template('Result: <%= value %>');
  console.log('Underscore:', underscoreTemplate({ value: 42 }));
}

function runCryptoDemo() {
  console.log('\n🔐 Cryptography Demo:');
  console.log('-'.repeat(40));
  
  // JWT signing
  const payload = { user: 'testuser', role: 'admin' };
  const token = jwt.sign(payload, 'my-secret-key', { expiresIn: '2h' });
  console.log('JWT Token:', token.substring(0, 50) + '...');
  
  // Node-forge hashing
  const md = forge.md.sha256.create();
  md.update('test-data');
  console.log('SHA256 Hash:', md.digest().toHex().substring(0, 40) + '...');
  
  // Serialize object
  const obj = { test: 'data', numbers: [1, 2, 3], date: new Date() };
  const serialized = serialize(obj);
  console.log('Serialized length:', serialized.length, 'bytes');
}

function runUtilityDemo() {
  console.log('\n🛠️  Utility Functions Demo:');
  console.log('-'.repeat(40));
  
  // Glob parent
  console.log('Glob parent of "src/**/*.js":', globParent('src/**/*.js'));
  console.log('Glob parent of "files/*.txt":', globParent('files/*.txt'));
  
  // Yargs parser
  const parsed = yargsParser(['--name', 'test', '--port', '3000', '--verbose']);
  console.log('Parsed args:', JSON.stringify(parsed));
  
  // Underscore utilities
  const items = [1, 2, 3, 4, 5];
  console.log('Underscore shuffle:', underscore.shuffle(items).join(','));
  console.log('Underscore sample:', underscore.sample(items));
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
  
  console.log('\n📚 Dependencies loaded (15 total):');
  console.log('  - lodash, axios, minimist, node-fetch, ansi-regex');
  console.log('  - tar, jsonwebtoken, express, ejs, handlebars');
  console.log('  - underscore, yargs-parser, serialize-javascript');
  console.log('  - node-forge, glob-parent');
  
  // Using lodash to demonstrate dependency
  const numbers = [10, 20, 30, 40, 50];
  console.log('\n📊 Lodash Statistics:');
  console.log('Sum:', _.sum(numbers));
  console.log('Mean:', _.mean(numbers));
  console.log('Max:', _.max(numbers));
  console.log('Min:', _.min(numbers));
  
  const mode = args._[0];
  
  if (mode === 'calculate') {
    runCalculatorDemo();
  } else if (mode === 'template') {
    runTemplateDemo();
  } else if (mode === 'crypto') {
    runCryptoDemo();
  } else if (mode === 'utility') {
    runUtilityDemo();
  } else {
    // Run all demos
    runCalculatorDemo();
    runStringUtilsDemo();
    runTemplateDemo();
    runCryptoDemo();
    runUtilityDemo();
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Application XYZ Completed Successfully!');
  console.log('='.repeat(50));
}

if (require.main === module) {
  main();
}

module.exports = { Calculator, StringUtils };

