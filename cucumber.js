const fs = require('fs');

if (!fs.existsSync('./reports')) { fs.mkdirSync('./reports'); }
if (!fs.existsSync('./reports/cucumber_logs')) { fs.mkdirSync('./reports/cucumber_logs'); }

module.exports = {
    default: [
        './api_test_suite/features/**/*.feature',
        '--format summary',
        '--format json:reports/cucumber_report.json',
        '--require ./api_test_suite/step_definitions',
        `--tags ""`,
        '--no-strict',
    ].join(' '),
};
