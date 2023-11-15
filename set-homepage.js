const fs = require('fs');
const packageJson = require('./package.json');

const setHomepage = () => {
    packageJson.homepage = "https://stevendev97.github.io/final_project/";
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
};

setHomepage();
