'use strict';
const 
	path 		= require('path'),
	response 	= require(path.resolve('core/lib/response')),
	Blog 		= require(path.resolve('models/Blog')),
	_ 			= require('lodash'),
  	config 		= require(path.resolve(`./core/env/${process.env.NODE_ENV}`));

exports.new = (req, res, next) => {
	if( !req.body.title  ){
		return res.status(response.STATUS_CODE.UNPROCESSABLE_ENTITY)
				.json(response.required({message: 'Blog title is required'}));
	}
	
	let blog = new Blog(req.body);
	blog.save()
	.then(blog => console.log(Blog))
	.then(result => res.json(response.success({success: true})) )
	.catch(err => {
		res
		.status(response.STATUS_CODE.UNPROCESSABLE_ENTITY)
		.json(response.error(err.errors || err));
	});
};

exports.get = (req, res, next) => {
	if( !req.body.email || !req.body.password ){
		return res.status(response.STATUS_CODE.UNPROCESSABLE_ENTITY)
				.json(response.required({message: 'Email and Password is required'}));
	}
	
	User.findOne({ email: req.body.email }, {reset_password: 0, salt: 0},(err, user, next) => {
		if(err){
			res
			.json(response.error(err));
		} else {
			let errors = {}, error = false;
			switch(_.isNull(user) || !_.isNull(user)){
				// 1. IF User Not Found in Database
				case _.isNull(user):
					errors = { message: 'Authentication failed. User not found.'};
					error = true;
					break;

				// 2. IF User Email is not verified
				case (!user.email_verified):
					errors = { message: 'Kindly check your inbox/spam folder and verify your email'};
					error = true;
					break;

				// 3. IF Admin has Deactivate User Account
				case (!user.status):
					errors = { message: 'Your account is deactivated by admin, please contact admin.'};
					error = true;
					break;

				default: 
					error = false;
			}
			
			if(error){
				res
				.status(response.STATUS_CODE.UNPROCESSABLE_ENTITY)
				.json(response.error(errors))
			} else {
				if(user.comparePassword(config.salt, req.body.password)){
					// Remove sensitive data before sending user object
					user.password = undefined;
					let token = jwt.sign(user, new Buffer(config.secret).toString('base64'), {expiresIn: '1 day'});
					res.json(response.success({success: true, user: user, token}));
				} else {
					res
					.status(response.STATUS_CODE.UNPROCESSABLE_ENTITY)
					.json(response.error({message: 'Authentication failed! Wrong Password'}));
				}
			}
		}
	});
};
