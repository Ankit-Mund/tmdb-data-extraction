import DS from 'ember-data';
import Em from 'ember';

export default DS.RESTAdapter.extend({
	host: 'http://localhost:3000',
  namespace: 'favourites',
  buildURL(){
    return `http://localhost:3000/favourites`;
  },

createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, {includeId: true});
    let url = `${this.host}/${this.namespace}/`;
    return new Promise((resolve, reject) => {
      Em.$.ajax({
        type: 'POST',
        url: 'http://localhost:3000/favourites' ,
        contentType: 'application/json',
        data: JSON.stringify(data),
        statusCode: {
          200: () => {
            Em.run(null, resolve)
          }
        }
      })
    })
  },
  deleteRecord(store, type, snapshot ){
    let data = this.serialize(snapshot);
    //console.log(snapshot.modelName);

    return new Promise(function (resolve, reject)  {
      Em.$.ajax({
        type: "DELETE",
        contentType: "application/json",
        data: JSON.stringify(data),
        url: `http://localhost:3000/favourites/`+ snapshot.id,
        })
    })
  }
});
