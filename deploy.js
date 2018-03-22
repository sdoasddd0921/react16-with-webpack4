var ghpages = require('gh-pages');

var options = {
  branch: 'master'
};

ghpages.publish('dist', options);