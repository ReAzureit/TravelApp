module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		"react-native/react-native": true,
		"jest/globals": true
	},
	extends: [
		"plugin:react/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:jest/recommended"
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},

	plugins: ["react", "react-native", "detox"],
	ignorePatterns: ["!.*", "dist", "node_modules"],
	rules: {
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"]
			}
		],
		"no-mixed-spaces-and-tabs": "off",
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": ["error"],
		"no-unused-vars": ["error", { vars: "all" }],
		"react/prop-types": "off"
	},

	settings: {
		react: {
			version: "detect"
		}
	}
};
