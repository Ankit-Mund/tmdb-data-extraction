import Route from '@ember/routing/route';

export default Route.extend({
	model(){

		return this.store.findAll('trending');
		 
	},
	actions : {
		transitionToDetails(trending) {
			// console.log(trending, "fdsdfsdfsdf")
			this.transitionTo('details', trending.get("id"));
		}
	}
});
