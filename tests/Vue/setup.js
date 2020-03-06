require('jsdom-global')();

global.expect = require('expect')

global.axios = require('axios');
global.Vue = require('vue');
global.jest = require('jest-mock');
global.bus = new Vue();
