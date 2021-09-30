const Pool = require('pg').Pool;

const pool= new Pool({
    user: process.env.USER_DB || 'ilhzxelc',
    host: process.env.HOST_DB || 'kashin.db.elephantsql.com',
    database: process.env.DATABASE_NAME || 'ilhzxelc',
    password: process.env.PASSWORD_DB || 'xKyzElRFw7DHX8WZelDW_mVq0zm2i073',
    port: process.env.PORT_DB || 5432,    
    ssl: { rejectUnauthorized: false }
});

module.exports = {
    pool
};