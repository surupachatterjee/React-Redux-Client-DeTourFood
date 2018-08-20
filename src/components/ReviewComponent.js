import React from 'react'
import UserProfileComponent from "./UserProfileComponent";
import UserProfileContainer from "../containers/UserProfileContainer";

class  ReviewComponent extends React.Component{

    renderReviews(){
        let overallRating;
        let foodRating;
        let ambRating;
        let serviceRating;
        let userReview;
        let rews= this.props.restaurant.reviews.map(review =>{
            return(
                <li className="list-group-item">
                    <a href="#" onClick={() => this.props.fetchProfile(review.user.username)}>{review.user.username}</a>
                    <b  >User Comments : {review.userReview}</b>
                    <p>OverAll Rating : {review.overallRating}</p>
                    <p>Ambiance Rating : {review.ambRating}</p>
                    <p>service Rating : {review.serviceRating}</p>
                    <p>Food Rating : {review.foodRating}</p>
                </li>
            )
        });
        return (<ul className="list-group">
            {rews}
            {this.props.loggedIn &&
            <li className="list-group-item">
                <textarea className="form-control" placeholder="Review"
                          ref={node => userReview =node}/>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 input-lg"
                           placeholder="overallRating"
                           aria-label="overallRating"
                           ref={node => overallRating = node}
                    />
                    <input className="form-control mr-sm-2 input-lg"
                           placeholder="foodRating"
                           aria-label="foodRating"
                           ref={node => foodRating = node}
                    />
                    <input className="form-control mr-sm-2 input-lg"
                           placeholder="ambienceRating"
                           ref={node => ambRating = node}
                    />
                    <input className="form-control mr-sm-2 input-lg"
                           placeholder="serviceRating"
                           ref={node => serviceRating = node}
                    />
                    <button

                        className="btn btn-outline-success float-right"
                        onClick={() =>{
                            let review ={
                                user:this.props.user._id,
                                restaurant:this.props.restaurant._id,
                                overAllRating: overallRating.value,
                                foodRating: foodRating.value,
                                ambRating: ambRating.value,
                                serviceRating:serviceRating.value,
                                userReview: userReview.value
                            }

                            this.props.createReview(review);
                        }}
                        type="button">
                        Add Review
                    </button>
                </form>
            </li>}
            </ul>);
    }


    render(){
        console.log(this.props.user.username);

        return(
            <div>
                <h2>Review here {this.props.user.username} - {this.props.restaurant._id}</h2>
                {/*<ul className="list-group">
                    <li className="list-group-item">{this.props.restaurant.name}</li>
                    <li className="list-group-item">Review 2</li>
                    <li className="list-group-item">Review 3</li>
                    <li className="list-group-item">Review 4</li>
                    <li className="list-group-item">
                        <textarea className="form-control" placeholder="Review"
                            ref={node => userReview =node}/>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2 input-lg"
                                   placeholder="overallRating"
                                   aria-label="overallRating"
                                   ref={node => overallRating = node}
                            />
                            <input className="form-control mr-sm-2 input-lg"
                                   placeholder="foodRating"
                                   aria-label="foodRating"
                                   ref={node => foodRating = node}
                            />
                            <input className="form-control mr-sm-2 input-lg"
                                   placeholder="ambienceRating"
                                   ref={node => ambRating = node}
                            />
                            <input className="form-control mr-sm-2 input-lg"
                                   placeholder="serviceRating"
                                   ref={node => serviceRating = node}
                            />
                            <button

                                className="btn btn-outline-success float-right"
                                onClick={() =>{
                                    let review ={
                                        user:this.props.user._id,
                                        restaurant:this.props.restaurant._id,
                                        overAllRating: overallRating.value,
                                        foodRating: foodRating.value,
                                        ambRating: ambRating.value,
                                        serviceRating:serviceRating.value,
                                        userReview: userReview.value
                                    }

                                    this.props.createReview(review);
                                }}
                                type="button">
                                Add Review
                            </button>
                        </form>
                    </li>
                </ul>*/}
                {this.renderReviews()}
            </div>
        )
    }
}

export default ReviewComponent;