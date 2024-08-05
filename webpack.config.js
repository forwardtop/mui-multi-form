module.exports = {
  // ... other configurations
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["source-map-loader"],
        // Add this line to ignore missing source maps
        options: {
          // Add the following option
          ignore: [/html2pdf\.js\/dist\/es6-promise\.map/],
        },
      },
    ],
  },
};
