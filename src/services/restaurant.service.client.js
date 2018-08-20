import * as constants from '../constants'

const RESTAURANT_URL = "https://developers.zomato.com/api/v2.1";


var cityDetails;

let _singleton = Symbol();

class RestaurantService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new RestaurantService(_singleton);
        return this[_singleton]
    }

    createReview(review){
        return fetch(constants.REVIEW_URL,{
            method:'post',
            body:JSON.stringify(review),
            headers:{
                'content-type':'application/json'
            },
            credentials:'include'
        }).then(response => response.json());
    }



    changeStatus(restId,restStatus){
        return fetch(constants.LOCAL_RESTAURANT_URL + "/" + restId + "/status/" + restStatus,{
            method : 'put',
            headers:{
                'content-type' : 'application/json'
            },
            credentials:"include"
        }).then(response => response.json());
    }

    createRestUser(user) {
        return this.findLocationDetailsByCity(
            user.addresses[0].city + " " +
            user.addresses[0].zip + " " +
            user.addresses[0].country
        ).then(function (loc) {
            return RestaurantService.instance.fetchZomatoRestaurants(user.addresses[0].addressName, loc.location_suggestions[0])
                .then(function (rest) {
                    let restLoc = {
                        ...rest[0].restaurant.location,
                        addressName: user.addresses[0].addressName,
                        state: user.addresses[0].state,
                        country: user.addresses[0].country
                    }
                    user = {
                        ...user,
                        addresses: [restLoc],
                        zomatoRest: rest[0],
                        menu: ''
                    }

                    return fetch(constants.LOCAL_RESTAURANT_URL, {
                        method: 'post',
                        body: JSON.stringify(user),
                        headers: {
                            'content-type': 'application/json'
                        }
                    }).then(response => response.json());
                });
        })


    }

    fetchAllRestaurantDetails() {
        return fetch(constants.LOCAL_RESTAURANT_URL)
            .then(resp => resp.json())
    }



    fetchZomatoRestaurants(name, fetchedLoc) {
        return fetch(RESTAURANT_URL + "/search?q=" + name.trim().replace(' ', '')
            + "&lat=" + fetchedLoc.latitude
            + "&lon=" + fetchedLoc.longitude
            + "&entity_id=" + fetchedLoc.entity_id
            + "&sort=rating"
            + "&count=10", {
            headers: {
                'Accept': 'application/json',
                'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
            }
        }).then(function (response) {
            return response.json();
        })
            .then(function (response) {
                return response.restaurants;
            })

    }


    findLocationDetailsByCity(cityName) {
        return fetch(RESTAURANT_URL + "/locations?query=" + cityName, {
            headers: {

                'Accept': 'application/json',
                'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
            }
        }).then(function (response) {
            console.log(response);
            return response.json();
        })
    }


    findAllRestaurants(cityName) {
        this.findLocationDetailsByCity(cityName)
            .then(function (response) {
                let fetchedLoc = response.location_suggestions[0];
                console.log(fetchedLoc);
                return fetch(RESTAURANT_URL + "/search?q=" + cityName
                    + "&lat=" + fetchedLoc.latitude
                    + "&lon=" + fetchedLoc.longitude
                    + "&entity_id=" + fetchedLoc.entity_id
                    + "&sort=rating"
                    + "&count=150", {
                    headers: {
                        'Accept': 'application/json',
                        'user-key': '8f387705dbb342d6fe530909e541b0dd'//key value here
                    }
                })
            })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(restaurants => {
                return restaurants;
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