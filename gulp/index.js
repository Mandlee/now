'use strict';

/**
 * Ez a gulp belépési pontja.
 * Itt olvassuk be a task fájlokat.
 * 
 * Ez csökkenti a későbbi munkát,
 * mivel magától elvégzi azt a feladatot,
 * amit egyébként kézzel kellene.
 * 
 * Pl: require('./tasks/scripts.js');
 */

const fs = require('fs');
const path = require('path');

const jsFilter = (name) => /(\.(js)$)/i.test(path.extname(name));
const tasks = fs.readdirSync('./gulp/tasks/').filter(jsFilter);

tasks.forEach(function (task) {
  require('./tasks/' + task);
});
