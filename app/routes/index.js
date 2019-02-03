const noteRoutes = require("./note_routes");
const fetchList = require("./fetch_list");

module.exports = {

	routeMgmt : function(app, db) {
		noteRoutes(app, db);
	},

	fetchList : function(app) {
		fetchList(app);
	}
}