exports.DATABASE_URL = process.env.DATABASE_URL ||
                      'mongodb://public:hello@ds229690.mlab.com:29690/recipe-app-db';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
                      'mongodb://localhost/recipe-app-testDb';
exports.PORT = process.env.PORT || 8080;

exports.JWT_SECRET = process.env.JWT_SECRET || 'THIS_MY_EXCAVATION';

exports.JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';