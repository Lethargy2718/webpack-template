const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs|ts)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    }
});
