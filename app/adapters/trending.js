import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	
	host: "https://api.themoviedb.org",
	namespace: "/3/trending/all/day",
	
	buildURL(modelName, id, snapshot, requestType, query){
		
		return this.host + this.namespace + '?api_key=2807c19d437127f8813de5da5768a753';
	}
});
