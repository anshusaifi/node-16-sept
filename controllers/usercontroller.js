const users = require('../users.json');

function getUser(req,res){
    try {
        res.json(users);
    } catch (error) {   

        console.log(error);
    }
}


function getParticularUser(req,res){
    try {
        let id = parseInt(req.params.id);
        let user = users.find((user)=>user.id==id);
        res.json(user);

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getUser,
    getParticularUser
}