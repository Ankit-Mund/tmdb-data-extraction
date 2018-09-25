import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
	addToFavourite(movie){
		let favourite=this.store.createRecord('favourite',{
			id:movie.get('id'),
			title:movie.get('title')
		});
		favourite.save();
	}
}
});
