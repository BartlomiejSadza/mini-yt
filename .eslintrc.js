// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	ignorePatterns: ["/dist/*"],
	root: true,
	extends: [
		"expo",
		"plugin:react-native/all",
		"plugin:react-hooks/recommended",
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		"react-native/react-native": true,
		es6: true,
	},
	plugins: ["react-native", "react-hooks", "prettier"],
	rules: {
		"react-native/no-inline-styles": "warn",
		"react-native/sort-styles": "off",
		"no-console": "error",

		"import/no-unresolved": "off",
	},
};
