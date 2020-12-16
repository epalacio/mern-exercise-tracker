const router = require('express').Router();
let User = require('../models/user.model');

//First endpoint that handles http GET requests that come to /users
router.route('/').get((req, res) => {
    //MongoDB method to get all the users from the DB
    User.find()
        //convert the users into json format, and then return these as a response
        .then(users => res.json(users))
        //if there's an error, we return this
        .catch(err => res.status(400).json('Error: ' + err));
});

//Second enpoint to handle POST requests
router.route('/add').post((req, res) => {
    //save the input username to a const
    const username = req.body.username;

    //use the new username to create a new instance of a "User"
    const newUser = new User({username});

    //save the newUser to the DB with the save() method
    newUser.save()
        //return the appropriate response if successful or error
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Normal step, exports the router
module.exports = router;
