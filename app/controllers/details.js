import Controller from '@ember/controller';

export default Controller.extend({
	// actions: {
 //    transitionToRoute(name,models,options) {
 //      this.transitionTo('details', trending.get("id"));
 //    }
 //   } 
 	queryParams : ["modelName"],
    modelName: null
});
