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
			console.log(trending.constructor.modelName);
			this.transitionTo('details', trending.get("id"),{queryParams:
				{
					modelName:trending.constructor.modelName
				}
			});
		}

	}

	
});
