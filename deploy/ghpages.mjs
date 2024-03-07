// place at : deploy/ghpages.js
// you can see more info at https://github.com/owwwwwo03/gh-pages
import { resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import { publish } from 'gh-pages';

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/owwwwwo03/PersonalWeb.git' // project github repo
};

const callback = err => {

    if (err) console.error(err);
    else console.log('publish success');
};

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
publish(resolve(__dirname, '../dist'), options, callback);