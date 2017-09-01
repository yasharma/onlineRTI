'use strict';

const mongoose 	= require('mongoose'),
path 			= require('path'),
config 			= require(require(path.resolve('./core/env')).getEnv),
uniqueValidator = require('mongoose-unique-validator'),
Schema 			= mongoose.Schema,

BlogSchema 	= new Schema({
	image:{
		name: {
			type: String,
		},
		path: {
			type: String,
		},
		original_name:  {
			type: String,
		}
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	short_description: {
		type: String
	},
	slug: {
		type: String,
		required: true,
		lowercase: true,
    	trim: true,
    	unque: true
	},
	status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

/* Mongoose beforeSave Hook : To hash a password */
BlogSchema.pre('save', function(next) {
    let blog = this;
    if (this.isModified('slug') || this.isNew) {
    	//https://gist.github.com/bentruyman/1211400
        blog.slug = blog.slug.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        next();
    } else {
        return next();
    }
});

BlogSchema.set('autoIndex', config.db.autoIndex);
BlogSchema.plugin(uniqueValidator, {
    type: 'mongoose-unique-validator'
});
module.exports = mongoose.model('Blog', BlogSchema);