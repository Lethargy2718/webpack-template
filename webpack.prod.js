const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    rules: [
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    targets: "defaults",
                    presets: [["@babel/preset-env"]],
                },
            },
        },
    ],
});
