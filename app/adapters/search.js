import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: "https://api.themoviedb.org",
	namespace:"/3/search/movie",

	buildURL(modelName, id, snapshot, requestType, query){
		const movie=query.movie_name;
		return this.host+this.namespace+ '?api_key=2807c19d437127f8813de5da5768a753&language=en-US&query='+movie+'&page=1&include_adult=false';

	}

});