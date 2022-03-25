const jwt = require('jsonwebtoken');
// the secret merely enaBLES THE SERVER TO VERIFY WHETHER IT RECOGNIZES THIS TOKEN
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    // signtoken expects a user object back
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};
