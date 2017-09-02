'use strict';
const path 	= require('path'),
_ 			= require('lodash'),
multer 		= require('multer'),
config 		= require(require(path.resolve('./core/env')).getEnv),
fs 			= require('fs');

/* Require All the controllers */
let ctrls = {};
fs.readdirSync(path.resolve('./controllers/Admin')).forEach(file => {
	let name = file.substr(0,file.indexOf('.'));
	ctrls[name] = require(path.resolve(`./controllers/Admin/${name}`));
});

let uploadImage = multer({
    limits: config.fileLimits,
    storage: multer.diskStorage({
    	destination: 'assets/blog/',
    	filename: function (req, file, cb) {
    		cb(null, Date.now() + '.' + config.file_extensions[file.mimetype]);
  		}
    }),
    fileFilter: fileFilter
    
});

/* Check if file is valid image */
function fileFilter (req, file, cb) {
	if(!_.includes(config.allowed_image_extensions, file.mimetype)){
		cb(new Error('Invalid image file'));
	}
	cb(null, true);
}


module.exports = {
  	routes: [
  		{ url: '/login', method: ctrls.adminCtrl.login, type: 'POST' },
  		{ url: '/cms/add', method: ctrls.cmsCtrl.add, type: 'POST' },
  		{ url: '/cms/list', method: ctrls.cmsCtrl.list, type: 'POST' },
  		{ url: '/cms/edit', method: ctrls.cmsCtrl.edit, type: 'PUT' },
  		{ url: '/cms/view/:type', method: ctrls.cmsCtrl.view, type: 'GET' },
  		{ url: '/blog/add', mwear: uploadImage.any(), method: ctrls.blogCtrl.add, type: 'SPECIALPOST' },
  		{ url: '/blog/list', method: ctrls.blogCtrl.list, type: 'POST' },
  		{ url: '/blog/view/:slug', method: ctrls.blogCtrl.view, type: 'GET' }
	]
};