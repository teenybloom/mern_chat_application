let UserModel = require('./schemas/userSchema');

let message = new UserModel({
    //add message details here

})

message.save()
    .then(msg =>{
        console.log(msg);
    })
    .catch(err => {
        console.err(err);
    })