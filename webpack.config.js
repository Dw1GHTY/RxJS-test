const path = require('path');

module.exports = {
    entry: './src/index.ts',		//<---entry point odakle krece da gleda zavisnosti
    devtool: 'inline-source-map',	//<---za source mape prilikom bundle-ovanja (da imas kod u debageru za debagovanjee)
    module: {
        rules: [
            {
                test: /\.tsx?$/,		//<----da bi osposobili "pakovanje" jpg, svg... fajlova, mora se dodati novo pravilo,
                use: 'ts-loader',		//tj. ovde se nalaze loaderi kojima se kaze kako da prepakuju razlicite fajlove
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};