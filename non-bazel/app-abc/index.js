#!/usr/bin/env node

/**
 * App ABC - A simple greeting application
 */

const _ = require('lodash');
const minimist = require('minimist');
const jwt = require('jsonwebtoken');
const ejs = require('ejs');
const Handlebars = require('handlebars');
const underscore = require('underscore');
const yargsParser = require('yargs-parser');
const serialize = require('serialize-javascript');
const forge = require('node-forge');
const globParent = require('glob-parent');

class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello from App ABC!, ${this.name}!`;
  }

  getFancyGreeting() {
    const timestamp = new Date().toLocaleString();
    return `🎉 Welcome to App ABC! Hello ${this.name}! [${timestamp}]`;
  }
}

function main() {
  console.log('='.repeat(50));
  console.log('Application ABC Starting...');
  console.log('='.repeat(50));
  
  // Parse command line arguments using minimist and yargs-parser
  const args = minimist(process.argv.slice(2));
  const yargsArgs = yargsParser(process.argv.slice(2));
  const userName = args.name || yargsArgs.name || 'User';
  
  const greeter = new Greeter(userName);
  console.log(greeter.greet());
  console.log(greeter.getFancyGreeting());
  
  // Using lodash and underscore
  const sampleArray = [1, 2, 3, 4, 5];
  console.log('\n📦 Lodash sample - Last element:', _.last(sampleArray));
  console.log('📦 Lodash sample - First element:', _.first(sampleArray));
  console.log('📦 Underscore sample - Max:', underscore.max(sampleArray));
  console.log('📦 Underscore sample - Min:', underscore.min(sampleArray));
  
  // Using JWT for token generation
  const token = jwt.sign({ username: userName, role: 'user' }, 'secret-key', { expiresIn: '1h' });
  console.log('\n🔐 JWT Token generated:', token.substring(0, 50) + '...');
  
  // Using Handlebars template
  const template = Handlebars.compile('Hello {{name}} from Handlebars!');
  console.log('📝 Handlebars output:', template({ name: userName }));
  
  // Using EJS template
  const ejsOutput = ejs.render('Welcome <%= user %> to EJS!', { user: userName });
  console.log('📝 EJS output:', ejsOutput);
  
  // Using serialize-javascript
  const data = { name: userName, timestamp: new Date(), values: sampleArray };
  const serialized = serialize(data);
  console.log('🔄 Serialized data length:', serialized.length, 'bytes');
  
  // Using node-forge for crypto
  const md = forge.md.sha256.create();
  md.update(userName);
  console.log('🔒 SHA256 hash:', md.digest().toHex().substring(0, 32) + '...');
  
  // Using glob-parent
  const parent = globParent('path/to/*.js');
  console.log('📂 Glob parent:', parent);
  
  console.log('\n📋 System Information:');
  console.log('Node version:', process.version);
  console.log('Platform:', process.platform);
  console.log('Architecture:', process.arch);
  
  console.log('\n📚 Dependencies loaded (10 total):');
  console.log('  - lodash, minimist, jsonwebtoken, ejs, handlebars');
  console.log('  - underscore, yargs-parser, serialize-javascript');
  console.log('  - node-forge, glob-parent');
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Application ABC Completed Successfully!');
  console.log('='.repeat(50));
}

if (require.main === module) {
  main();
}

module.exports = { Greeter };

