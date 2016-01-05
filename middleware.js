var middleware = {
	requireAuthentication: function(req, res, next){
		console.log("Private path hit");
		next();
	},
	logger: function(req, res, next){
		console.log( new Date().toString() + " - Hit on " + req.url + " using " + req.method);
		next();
	}
};

module.exports = middleware;