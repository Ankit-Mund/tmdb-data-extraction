import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
	addToFavourite(movie){
		let favourite=this.store.createRecord('favourite',{
			id:movie.get('id'),
			title:movie.get('title'),
			poster_path:movie.get('poster_path')
		});
		favourite.save();
	}
}
});
