import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		let model_obj={
			trending:this.store.findAll('trending'),
			upcoming:this.store.findAll('upcoming')
		}
		return model_obj; 
	},
	actions : {
		transitionToDetails(trending) {
			this.transitionTo('details', trending.get("id"));
		}
	}
});
