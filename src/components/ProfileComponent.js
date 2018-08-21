import React from 'react';


class ProfileComponent extends React.Component{

    renderReviews(){
        let rews = this.props.fetchedUserProfile.reviews.map(review =>{
            return(<li className="list-group-item">
                <div className="col col-sm-6">
                    <ul className="list-group">
                    <li className="list-group-item">
                        <b>Restaurant Name : </b>
                        {review.restaurant.name}
                    </li>
                        <li className="list-group-item">
                            <b>OverAll Rating : </b>
                            {review.overAllRating}
                        </li>
                        <li className="list-group-item">
                            <b>Service Rating : </b>
                            {review.serviceRating}
                        </li>
                        <li className="list-group-item">
                            <b>Ambiance Rating : </b>
                            {review.ambRating}
                        </li>
                        <li className="list-group-item">
                            <b>Comments :  </b>
                        <p>{review.userReview}</p>
                        </li>
                    </ul>
                </div>


            </li>);

        });
        return <ul className="list-group">{rews}</ul>
    }

    render(){
        return(<div>
            <h2></h2>
            <ul className="list-group col col-sm-6">

                    <li className="list-group-item"> Username: {this.props.fetchedUserProfile.username }</li>
                    <li className="list-group-item"> First Name:{this.props.fetchedUserProfile.firstName }</li>
                    <li className="list-group-item"> Last Name :{this.props.fetchedUserProfile.lastName }</li>
                    <li className="list-group-item">Email :{this.props.fetchedUserProfile.email }</li>

                <li className="list-group-item">
                    <h4>Reviews Provided by {this.props.fetchedUserProfile.username }</h4>
                </li>
            </ul>
            {this.renderReviews()}


        </div>)
    }

}

export default ProfileComponent;