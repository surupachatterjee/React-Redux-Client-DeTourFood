

const RESTAURANT_URL ="https://developers.zomato.com/api/v2.1";
var cityDetails;

let _singleton = Symbol();
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

               'Accept': 'application/json',
               'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
           }
       }).then(function (response) {
           console.log(response);
           return response.json();
       })
    }


    findAllRestaurants(cityName){
        this.findLocationDetailsByCity(cityName)
            .then(function (response) {
                let fetchedLoc = response.location_suggestions[0];
                console.log(fetchedLoc);
                return fetch(RESTAURANT_URL + "/search?q="+cityName
                    +"&lat="+fetchedLoc.latitude
                    +"&lon="+fetchedLoc.longitude
                    +"&entity_id="+fetchedLoc.entity_id
                    +"&sort=rating"
                    +"&count=150",{
                    headers:{
                        'Accept': 'application/json',
                        'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
                    }
                }).then(function (response) {
                    return response.json();
                })
            })
    }

   /* findRestaurantsByLoc(fetchedLoc,cityName){
        return fetch(RESTAURANT_URL + "/search?q="+cityName
            +"&lat="+fetchedLoc.latitude
            +"&lon="+fetchedLoc.longitude
            +"&entity_id="+fetchedLoc.entity_id
            +"&sort=rating"
            +"&count=150",{
            headers:{
                'Accept': 'application/json',
                'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
            }
        }).then(function (response) {
            return response.json();
        })
    }*/
}

export default RestaurantService;