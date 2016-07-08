var mongoose = require('mongoose');

/////////////////////////////////////////////////////////////////////////////////
// This is a model that we originally had intended to include in our initial ////
// ERDs. Due to time constraints of the project (4 days to compmplete), we   ////
// decided not to include this in development. We would eventually like to add //
// this to indclude the option of adding skills as a feature to both student   //
// and instructor profiles. We envision this as a search feature.              //
/////////////////////////////////////////////////////////////////////////////////

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

var Skill = mongoose.model('########', skillSchema);

module.exports = Skill;
