/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
	transform: {
		"\\.[jt]sx?$": "babel-jest",
	},
};
