# TODO Backend Starter

A basic starter backend to go along with the [Todo UI](https://github.com/codecorvallis/todo-ui). Based off the source created by the [Express Application Generator](https://expressjs.com/en/starter/generator.html)

Meant to be a "reasonable start" for a backend service. See `Other Packages` below for additional suggestions.

# Packages
### Web Packages
| Name | Description |
|------|-------------|
| [Express](https://expressjs.com/) | Web Framework |
| [body-parser](https://github.com/expressjs/body-parser) | Body Parser for Express |
| [cookie-parser](https://github.com/expressjs/cookie-parser) | Cookie Parser for Express |
| [cors](https://github.com/expressjs/cors) | [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) Handler for Express |
| [ejs](https://github.com/mde/ejs) | Template Engine |
| [helmet](https://github.com/helmetjs/helmet) | Security Helper |
| [morgan](https://github.com/expressjs/morgan) | HTTP Request Logger |
| [serve-favicon](https://github.com/expressjs/serve-favicon) | [Favicon](https://en.wikipedia.org/wiki/Favicon) helper|

### DB Packages
| Name | Description |
|------|-------------|
| [sqlite3](https://github.com/mapbox/node-sqlite3) | Node package for [SQLite](https://www.sqlite.org/)
| [knex](http://knexjs.org/) | SQL Helper |

### Misc Package
| Name | Description |
|------|-------------|
| [ESLint](https://eslint.org/) | JavaScript Linter |
| [debug](https://github.com/visionmedia/debug) | Debug Utility |
| [cross-env](https://www.npmjs.com/package/cross-env) | Cross Platform Environment Variables|
| [npm-run-all](https://github.com/mysticatea/npm-run-all) | Run Multiple NPM Scripts |
| [Rimraf](https://github.com/isaacs/rimraf) | rm -rf util for node |

### Testing Packages
| Name | Description |
|------|-------------|
| [Mocha](https://github.com/mochajs/mocha) ([Site](https://mochajs.org/)) | Test Framework |
| [Chai](https://github.com/chaijs/chai) ([Site](http://chaijs.com/))| Assertion Library |
| [chai-as-promised](https://github.com/domenic/chai-as-promised) | Chai Extension for promises |

# Data Model
Initial Data Model. *Note* This needs to match your work in the [Todo UI](https://github.com/codecorvallis/todo-ui)

| Field | Type | Notes|
|-------|------|------|
| id | number | primary key |
| priority | string | Values: Low, Medium, High |
| status | string | Values: New, In Progress, Done, Canceled |
| category | string | Values: Home, Work, Other |
| title | string | |
| description | string | |
| created | date/time | Timestamp created on server |
| lastUpdated | date/time | Timestamp updated on server |


# Other Package
The following packages are not included but are worth considering

| Name | Description |
|------|-------------|
| [compression](https://github.com/expressjs/compression) | Compression Library |
| [dotenv](https://github.com/motdotla/dotenv) | Load environment variables from a file |
| [pm2](https://github.com/Unitech/pm2) | Production Process Manager |
| [nodemon](https://github.com/remy/nodemon) | File watcher that restarts app on changes |
| [pino](https://github.com/pinojs/pino) | Logger |
| [winston](https://github.com/winstonjs/winston) | Logger |
| [bunyan](https://github.com/trentm/node-bunyan) | Logger |
| [rollbar](https://github.com/rollbar/rollbar.js) | Error Tracking to [Rollbar](https://rollbar.com/)