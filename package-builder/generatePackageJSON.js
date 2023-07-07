const fs = require('fs');
const path = require('path');

function generatePackageJson() {
  // Read data from other files or perform logic to determine the values
  const name = 'Yu-Ar-El -- URL';
  const version = '1.0.0';

  // Load dependency configurations from separate files
  const dependencies = require('./dependencies/dependencies.js');
  const devDependencies = require('./dependencies/devDependencies.js');
  const scripts = require('./dependencies/scripts.js');
  const jestConfig = require('../jest.config.js');
  // const babelConfig = require('./dependencies/babel.config.js');

  const packageJson = {
    name, // Package name
    version, // Package version
    dependencies: dependencies.dependencies, // Dependencies
    devDependencies: devDependencies.devDependencies, // Dev dependencies
    scripts: scripts.scripts, // Scripts
    jest: jestConfig.jest, // Jest configuration
    // babel: babelConfig.babel, // Babel configuration
    // Other properties...
  };

  const packageJsonPath = path.join(__dirname, '..', 'package.json'); // Adjust the directory structure if needed

  // Write the generated package.json to a file
  fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('package.json generated successfully!');
  });
}

module.exports = generatePackageJson;
