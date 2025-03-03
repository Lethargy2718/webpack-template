const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    module: {
        rules: [
            {
                test: /\.(?:ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
});
