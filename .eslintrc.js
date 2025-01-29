module.exports = {
    env: {
        browser: true,
        node: true,
        es2022: true,
    },
    extends: ["eslint:recommended", "airbnb-base", "prettier"],
    plugins: ["import"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "no-console": "off",
    },
};
