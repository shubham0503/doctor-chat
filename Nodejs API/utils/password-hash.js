/*
 * Angular 2 Doctor Help Chat App
 * @author *******Shubham Sahu*******
 */
'use strict';
const bcrypt = require('bcrypt');

class PasswordHash {

    createHash(password) {
        return bcrypt.hashSync(password, 10);
    }

    compareHash(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
}

module.exports = new PasswordHash();