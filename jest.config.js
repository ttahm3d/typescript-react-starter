/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
	transform: {
		"\\.[jt]sx?$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
		"\\.(css)$": "<rootDir>/__mocks__/styleMock.js",
	},
	setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
};
