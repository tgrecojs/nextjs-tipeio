const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.EnvironmentPlugin([
        'TIPE_API_KEY', 
        'TIPE_API_SECRET',
        'TIPE_REST_URL'
        ])
    );
    return config;
  }
};
