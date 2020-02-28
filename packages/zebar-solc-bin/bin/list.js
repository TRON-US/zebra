var soljsonSources = [
    "soljson-v0.5.9+commit.a1d534e.js",
    "soljson-v0.5.8+commit.1f148fe.js",
    "soljson-v0.5.4+commit.1d7181d.js",
    "soljson-v0.4.25+commit.69a1e72.js",
    "soljson-v0.4.24+commit.6ae29c7.js"
]

var soljsonReleases = {
    "0.5.9":  "soljson-v0.5.9+commit.a1d534e.js",
    "0.5.8":  "soljson-v0.5.8+commit.1f148fe.js",
    "0.5.4":  "soljson-v0.5.4+commit.1d7181d.js",
    "0.4.25": "soljson-v0.4.25+commit.69a1e72.js",
    "0.4.24": "soljson-v0.4.24+commit.6ae29c7.js"
}

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  }