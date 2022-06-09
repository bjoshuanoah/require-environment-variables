var requireEnv = require('../src/index');

require('dotenv').config({path: './tests/.env'});

describe('require-environment-variables', function () {

	test('should verify that process.env.THISISATEST exists', function (done) {
		expect(function () {
			requireEnv(['THISISATEST']);
		}).not.toThrow('Environment variables missing');
		done();
	});

	test('should throw an error that process.env.THISDOESNTEXIST is missing', function (done) {
		expect(function () {
			requireEnv(['THISDOESNTEXIST']);
		}).toThrow('Environment variables missing');
		done();
	});

    test('should return an object of keys and values', function (done) {
        var expectedEnvVars = requireEnv(['THISISATEST']);
        expect(expectedEnvVars.THISISATEST).toEqual('YELLOWORANGE');
        done();
    })

});
