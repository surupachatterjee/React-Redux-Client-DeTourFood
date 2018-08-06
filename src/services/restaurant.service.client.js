let _singleton = Symbol();

const RESTAURANT_URL ="https://developers.zomato.com/api/v2.1";
var cityDetails;

class RestaurantService{

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new RestaurantService(_singleton);
        return this[_singleton]
    }

    findLocationDetailsByCity(cityName){
       return fetch(RESTAURANT_URL + "/locations?query=" + cityName,{
           headers:{
               Accept: 'application/json',
               userKey: '8f387705dbb342d6fe530909e541b0dd'//key value here
           }
       }).then(function (response) {
           console.log(response);
           return response.json();
       })
    }


    findAllRestaurants(cityName){
        this.findLocationDetailsByCity(cityName)
            .then(function (response) {
                return fetch(RESTAURANT_URL + "/search?q="+cityName
                    +"&lat="+response.latitude
                    +"&lon="+response.longitude
                    +"&entity_id="+response.entity_id
                    +"&sort=rating"
                    +"&count=150",{
                    headers:{
                        Accept: 'application/json',
                        userKey: ''//key value here
                    }
                })
                    .then(function (response) {
                        return response.json();
                    })
            })
    }
}

export default RestaurantService;