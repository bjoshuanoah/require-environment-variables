'use strict';

module.exports = function (variableArray) {
    var envArr = {};

	if (!Array.isArray(variableArray)) {
		console.error('Array required');
		return {};
	}
	var missingVariables = [];
	for (var i = 0; i < variableArray.length; i++) {
		if (!process.env[variableArray[i]]) {
			missingVariables.push(variableArray[i]);
            continue;
		}
        envArr[variableArray[i]] = process.env[variableArray[i]];
	}
	if (missingVariables.length) {
		console.error('Environment variables needed:', JSON.stringify(missingVariables));
		throw new Error('Environment variables missing');
	}
    return envArr;
};
