const { CracoAliasPlugin } = require("react-app-alias");
const path = require("path");

const api = process.env.REACT_APP_BASE_URL;

module.exports = {
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {},
        },
    ],
    devServer: {
        proxy: {
            "/api": {
                target: api,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
};
