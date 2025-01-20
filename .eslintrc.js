module.exports = {
	ignorePatterns: ["/dist/*"],
	root: true,
	extends: [
		"expo",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:react-native/all",
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
		// React Native Specific
		"react-native/no-unused-styles": "error",
		"react-native/no-single-element-style-arrays": "error",
		"react-native/no-raw-text": "error",
		"react-native/sort-styles": "off",
		"react-native/split-platform-components": "error",
		"react-native/no-color-literals": "warn",
		"react-native/no-inline-styles": "off",

		// React Hooks
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",

		// General React
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-key": "error",
		"react/no-array-index-key": "warn",
		"react/prop-types": "off",

		// TypeScript Specific
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-require-imports": "off",

		// Code Style
		"no-console": "error",
		"no-unused-vars": "error",
		"prefer-const": "error",
		quotes: ["error", "double"],
		"no-var": "error",
		eqeqeq: "error",
		"no-multiple-empty-lines": "error",
		"no-trailing-spaces": "error",

		// Import/Export
		"import/order": "error",
		"import/no-duplicates": "error",
		"import/named": "error",
		"import/no-unresolved": "off",
		"react/react-in-jsx-scope": "off",
	},
};
