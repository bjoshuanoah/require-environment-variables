var requireEnv = require('../'),
	assert = require('assert'),
	expect = require('chai').expect;

require('dotenv').config({path: './tests/.env'});

describe('require-environment-variables', function () {

	it('should verify that process.env.THISISATEST exists', function (done) {
		expect(function () {
			requireEnv(['THISISATEST']);
		}).to.not.throw('Environment variables missing');
		done();
	});

	it('should throw an error that process.env.THISDOESNTEXIST is missing', function (done) {
		expect(function () {
			requireEnv(['THISDOESNTEXIST']);
		}).to.throw(Error, /Environment variables missing/);
		done();
	});

    it('should return an object of keys and values', function (done) {
        var expectedEnvVars = requireEnv(['THISISATEST']);
        expect(expectedEnvVars.THISISATEST).to.equal('YELLOWORANGE');
        done();
    })

});
