const users = require('../users.json');

function getUser(req,res){
    try {
        res.json(users);
    } catch (error) {   

        console.log(error);
    }
}
module.exports = {
    getUser
}