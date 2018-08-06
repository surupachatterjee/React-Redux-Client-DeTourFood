let _singleton = Symbol();

const RESTAURANT_URL ="https://developers.zomato.com/api/v2.1";
var cityDetails;

class RestaurantService{

    findLocationDetailsByCity(cityName){
       return fetch(RESTAURANT_URL + "/locations?query=" + cityName,{
           headers:{
               Accept: 'application/json',
               userKey: ''//key value here
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