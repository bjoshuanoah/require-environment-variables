module.exports = function (variableArray) {
	if (!Array.isArray(variableArray)) {
		console.error('Array required')
		return;
	}
	var missingVariables = [];
	for (var i = 0; i < variableArray.length; i++) {
		if (!process.env[variableArray[i]]) {
			missingVariables.push(variableArray[i]);
		}
	}
	if (missingVariables.length) {
		console.error('Environment variables needed:', JSON.stringify(missingVariables));
		process.exit(404);
	}
}