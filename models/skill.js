var mongoose = require('mongoose');

var skillSchema = new mongoose.Schema({
  cli: { type: String, required: false },
  git: { type: String, required: false },
  github: { type: String, required: false },
  html: { type: String, required: false },
  css: { type: String, required: false },
  javascript: { type: String, required: false },
  jquery: { type: String, required: false },
  bootstrap: { type: String, required: false },
  node_js: { type: String, required: false },
  express_js: { type: String, required: false },
  api: { type: String, required: false },
  sql: { type: String, required: false },
  nosql: { type: String, required: false },
  postgresql: { type: String, required: false },
  mongo_db: { type: String, required: false },
  angular_js: { type: String, required: false },
  backbone_js: { type: String, required: false },
  react_js: { type: String, required: false },
  ruby: { type: String, required: false },
  rails: { type: String, required: false },
  python: { type: String, required: false },
  c: { type: String, required: false },
  c_sharp: { type: String, required: false },
  c_plus: { type: String, required: false },
  c_plus_plus: { type: String, required: false }

});

// Need to find what goes in the single quotes below
var Skill = mongoose.model('########', skillSchema);

module.exports = Skill;
