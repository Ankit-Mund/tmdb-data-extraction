import DS from 'ember-data';

const {attr}=DS;

export default DS.Model.extend({
	title: attr('string'),
	poster_path: attr('string'),
	overview: attr('string'),
	release_date: attr('string'),
	popularity: attr('string')
});
