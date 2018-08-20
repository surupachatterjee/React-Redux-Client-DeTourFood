import {connect} from 'react-redux';
import * as actions from '../actions/index';
import * as userActions from '../actions/UserActions';
import ReviewComponent from "../components/ReviewComponent";

const  stateToPropertyMapper = (state) =>{
    console.log("stateToPropertyMapper in login container" + state.user  + ": " + state.loggedIn);
    return({
            user:state.UserReducer.user,
            restaurant: state.RestaurantReducer.selectedRestaurant,
            review:state.RestaurantReducer.review,
            loggedIn:state.UserReducer.loggedIn

        }
    );
}

const dispatcherToPropertyMapper = dispatch => {
    console.log("Inside dispatcherToPropertyMapper of LoginContainer ");
    return(
        {

            createReview:review => actions.createReview(dispatch,review),
            fetchProfile : username => userActions.fetchProfile(dispatch,username)
        }
    )
}

const ReviewContainer =
    connect(
        stateToPropertyMapper   ,
        dispatcherToPropertyMapper)
    (ReviewComponent)

export default ReviewContainer;