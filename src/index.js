/**
 * @apiDefinePermission public This information is publicly accessible.
 * No authentication is required.
 *
 * @apiVersion 1.0.0
 */

/**
 * @apiDefinePermission user Authenticated access is required.
 * An API key is required.
 * 
 * @apiVersion 1.0.0
 */
var settings = require('./settings.js');
var ACCESSTOKEN = settings.accessToken;
var request = require('request');
var ENDPOINT = settings.endpoint;

/*******Users*******/
module.exports.getUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + 'users/'+username+'/?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};


module.exports.getThingsByUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + 'users/' + username + '/things?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.getThingLikesByUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + 'users/' + username + '/likes?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.getCopiesByUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + 'users/' + username + '/copies?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};


module.exports.getCollectionsByUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + 'users/' + username + '/collections?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.getDownloadsByUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + 'users/' + username + '/downloads?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};


module.exports.addPushNotifyDevice = function(username, UUID, callback) {
	if(!username) return callback('Missing username.');
	if(!UUID) return callback('Missing UUID.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		var postParams = {
			access_token: ACCESSTOKEN,
			type: 'apn', // Currently only apn
			id: UUID //For apn, the apple device UUID
		};
		request.post(ENDPOINT + 'users/' + username + '/notifier', {form: postParams}, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.getTokensByUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + 'users/' + username + '/tokens?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.deletePushNotifyDevice = function(username, UUID, callback) {
	if(!username) return callback('Missing username.');
	if(!UUID) return callback('Missing UUID.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		var postParams = {
			access_token: ACCESSTOKEN,
			type: 'apn', // Currently only apn
			id: UUID //For apn, the apple device UUID
		};
		request.del(ENDPOINT + 'users/' + username + '/notifier', {form: postParams}, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.followUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request.post(ENDPOINT + 'users/' + username + '/followers?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.unfollowUser = function (username, callback) {
	if(!username) return callback('Missing username.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request.del(ENDPOINT + 'users/' + username + '/followers?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.updateAvatar = function (username, filename, callback) {
	if(!username) return callback('Missing username.');
	if(!filename) return callback('Missing filename.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		var postParams = {
			filename: filename
		};
		request.post(ENDPOINT + 'users/' + username + '/avatarimage?access_token='+ACCESSTOKEN, {form: postParams}, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.updateCoverImage = function (username, filename, callback) {
	if(!username) return callback('Missing username.');
	if(!filename) return callback('Missing filename.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		var postParams = {
			filename: filename
		};
		request.post(ENDPOINT + 'users/' + username + '/avatarimage?access_token='+ACCESSTOKEN, {form: postParams}, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

/*******Things*******/
module.exports.getThings = function (id, callback) {
	if(!id) return callback('Missing thing id.');
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + 'things/'+id+'/?access_token='+ACCESSTOKEN, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.getImagesByThings = function (id, imageID, callback) {
	if(!id) return callback('Missing thing id.');
	var query = '/things/'+id;
	if(!imageID) {
		query += '/images/'+imageID;
	}
	query += '/?access_token='+ACCESSTOKEN
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + query, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};

module.exports.getFilesByThings = function (id, fileID, callback) {
	if(!id) return callback('Missing thing id.');
	var query = '/things/'+id;
	if(!fileID) {
		query += '/files/'+fileID;
	}
	query += '/?access_token='+ACCESSTOKEN
	_checkAPIKey(function (error) {
		if(error) return callback(error);
		request(ENDPOINT + query, function (error, response, body) {
			if(error) return callback(error);
			if(response.statusCode === 200) {
				return callback(null, body);
			} else {
				return callback(body);
			}
		});
	});
};