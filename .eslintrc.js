module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: ["standard-with-typescript", "prettier"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json",
	},
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
	},
};
