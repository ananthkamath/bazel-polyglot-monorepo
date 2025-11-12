#!/usr/bin/env node

/**
 * App ABC - A simple greeting application
 */

const _ = require('lodash');
const axios = require('axios');
const minimist = require('minimist');
const fetch = require('node-fetch');
const ansiRegex = require('ansi-regex');

class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello from App ABC, ${this.name}!`;
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
  
  // Parse command line arguments using minimist
  const args = minimist(process.argv.slice(2));
  const userName = args.name || 'User';
  
  const greeter = new Greeter(userName);
  console.log(greeter.greet());
  console.log(greeter.getFancyGreeting());
  
  // Using lodash to demonstrate dependency
  const sampleArray = [1, 2, 3, 4, 5];
  console.log('\nLodash sample - Last element:', _.last(sampleArray));
  console.log('Lodash sample - First element:', _.first(sampleArray));
  
  console.log('\nNode version:', process.version);
  console.log('Platform:', process.platform);
  console.log('Architecture:', process.arch);
  console.log('Dependencies loaded: lodash, axios, minimist, node-fetch, ansi-regex');
  
  console.log('='.repeat(50));
  console.log('Application ABC Completed Successfully!');
  console.log('='.repeat(50));
}

if (require.main === module) {
  main();
}

module.exports = { Greeter };

