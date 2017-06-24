var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

// We need the user model to be able to save the User Id with the message 
// and Save the user's array of messages in the database

var User = require('../models/user');
var Message = require('../models/message');

// All routes from here have "messages" in front

// This is the call that lets you get the messages 
router.get('/', function (req, res, next) {
	Message.find()
		.populate('user', 'firstName')
		.exec(function(err, messages) {
			if (err) {
				return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    			});
			}
			res.status(200).json({
				message: 'Success',
				obj: messages
			});
		});
});

// If you want to get passed this, you must be logged in

router.use('/', function(req, res, next){
	jwt.verify(req.query.token, 'secret', function(err, decoded) {
		if (err) {
			return res.status(401).json({
				title: 'Not Authenticated',
				error: err
			});
		}
		next(); // This user is logged in, let the post request continue
	});	
});

// This is how you save a new message
router.post('/', function (req, res, next) {
	var decoded = jwt.decode(req.query.token);
	User.findById(decoded.user._id, function(err, user) {
		if (err) {

    		// If there is an error, return from this function immediately with
    		// the error code
    		return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    			});
    		}
	
		// Create the new message, add the user info to the message before you save it
    	var message = new Message({
    		content: req.body.content,
    		user: user
    	});

    	message.save(function(err, result) {
    		if (err) {

    			// If there is an error, return from this function immediately with
    			// the error code
    			return res.status(500).json({
    				title: 'An error occurred',
    				error: err
    			});
    		}

    		// Message successfully saved, add this message to this user's message array
    		// and save the user with the new message array
    		user.messages.push(result);
    		user.save();
    		res.status(201).json({
    			message: 'Saved Message',
    			obj: result
    		});
    	});
    });	
});

router.patch('/:id', function(req, res, next) {

	// Get the token so we only allow the user that owns this message 
	// to modify it
	var decoded = jwt.decode(req.query.token);

	Message.findById(req.params.id, function(err, message) {
		if (err) {
		// If there is an error trying to get the message from the server, 
		// return from this function immediately with the error code
    		return res.status(500).json({
    			title: 'An error occurred',
    			error: err
    		});	
		}
		if (!message) {
			// The message couldn't be found, return with an error
			return res.status(500).json({
    			title: 'No Message Found',
    			error: {message: 'Message not found'}
    		});	
		}
		if (message.user != decoded.user._id) {
			return res.status(401).json({
				title: 'Not Authenticated',
				error: {message: 'Users do not match'}

			});
		}
		message.content = req.body.content;
		message.save(function(err, result) {
			if (err) {
	    		// If there is an error, return from this function immediately with
    			// the error code
    			return res.status(500).json({
    				title: 'An error occurred',
    				error: err
    			});
    		}
    		res.status(200).json({
    			message: 'Updated Message',
    			obj: result
    		});
		});
	});
});

router.delete('/:id', function(req, res, next) {
	// Get the token so we only allow the user that owns this message 
	// to delete it
	var decoded = jwt.decode(req.query.token);

	Message.findById(req.params.id, function(err, message) {
	if (err) {
		// If there is an error trying to get the message from the server, 
		// return from this function immediately with the error code
		return res.status(500).json({
			title: 'An error occurred',
			error: err
		});	
	}
	if (!message) {
		// The message couldn't be found, return with an error
		return res.status(500).json({
			title: 'No Message Found',
			error: {message: 'Message not found'}
		});	
	}
	
	if (message.user != decoded.user._id) {
		return res.status(401).json({
			title: 'Not Authenticated',
			error: {message: 'Users do not match'}
		});
	}
	message.remove(function(err, result) {
		if (err) {
	   		// If there is an error, return from this function immediately with
			// the error code
			return res.status(500).json({
				title: 'An error occurred',
				error: err
			});
		}
		res.status(200).json({
			message: 'Deleted Message',
			obj: result
			});
		});
	});
});

module.exports = router;
// a comment