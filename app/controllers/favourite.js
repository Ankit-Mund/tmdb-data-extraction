import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		delete(movie){
		this.store.findRecord('favourite',movie.get('id')).then(function(movie){
		movie.destroyRecord();				
		});
		// this.transitionTo('favourite');
		}
	
	}	
});
