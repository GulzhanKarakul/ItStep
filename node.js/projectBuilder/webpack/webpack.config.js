import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export default {
    mode: 'production',
    entry: './public/entry.js',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'bundle.js',
    },
    optimization: {
        minimizer: [
            new TerserPlugin(), // Плагин для сжатия JavaScript
            new CssMinimizerPlugin(), // Плагин для минимизации CSS
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(process.cwd(), './public/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
};