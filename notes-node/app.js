console.log('Starting app.js...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv
let command = argv._[0];

console.log('Command: ', command);
console.log('Yargs: ', argv);

switch (command) {
  case 'add':
    notes.addNote(argv.title, argv.body);
    break;
  case 'list':
    notes.getAll();
    break;
  case 'read':
    notes.getNote(argv.title);
    break;
  case 'remove':
    notes.removeNote(argv.title);
    break;
  default:
    console.log('Command not recognized.');
};

// if (command === 'add') {
//   notes.addNote(argv.title, argv.body);
// } else if (command === 'list') {
//   notes.getAll();
// } else if (command === 'read') {
//   notes.getNote(argv.title);
// } else if (command === 'remove') {
//   notes.removeNote(argv.title);
// } else {
//   console.log('Command not recognized');
// }