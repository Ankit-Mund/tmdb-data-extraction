import Controller from '@ember/controller';
import {set} from '@ember/object';

export default Controller.extend({
	actions:{
		search_movie(movie){
			this.store.unloadAll('search');
			set(this, "obj", this.store.query('search', {movie_name: movie}))
			// return this.store.query('search',{movie_name:movie});
		}
	}
});
