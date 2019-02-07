// Using nodemon for watching the changes to node.js code
let express = require('express');
let bodyParser = require('body-parser');
let db = require('./db.json');
const app = express();

let port = process.env.PORT || 3000;

let jsonParser = bodyParser.json();


/**
 * SSO LOGIN
 * POST: returns valid user object
 * DELETE: logs out the user
 */
app.post('/private/v2/assistedAuth/sso', (req, res) => {
    let response = {
        userId: 'as52222',
        token: 'fksdjflasdhflsadhfhsajdfhsdu4392930432944' 
    }
    res.json(response);
});
app.delete('/private/v2/assistedAuth/sso', (req, res) => {
    let response = {
        userId: 'deleted',
        token: 'fksdjflasdhflsadhfhsajdfhsdu4392930432944' 
    }
    res.json(response);
});
/************************************************************/
/**
 * USERPRODUCT
 * GET: returns mock user object 
 * PUT: returns mock user object without modification (we are just mocking the API)
 * POST: returns mock user object
 */
app.get('/private/v1/profiles/userProduct', (req, res) => {
    res.json(db);
});
app.put('/private/v1/profiles/userProduct', (req, res) => {
    res.json(db);
});
app.post('/private/v1/profiles/userProduct', (req, res) => {
    res.json(db);
});


app.listen(port, () => console.log(`mock server is listening in port ${port}`));