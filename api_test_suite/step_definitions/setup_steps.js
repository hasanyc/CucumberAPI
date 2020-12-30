import envConfig from '../config';

const { Before, After } = require('cucumber');


Before(() => {
    global.expect = require('chai').expect;
    global.CONFIG = {
        envConfig,
        landlordData: {},
    };
});

After(async () => {

});
