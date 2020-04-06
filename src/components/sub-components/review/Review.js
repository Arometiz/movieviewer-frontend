import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  getMoviePending,
  getMovieError,
  getMovie
} from "../../../reducers/movieReducer";
import "./review.css";
import StarRatings from "react-star-ratings";
import profilepicture from "../../../pictures/profilepicture.jpg";

const mapStateToProps = state => ({
  error: getMovieError(state),
  movie: getMovie(state),
  links: state.movies.links,
  pending: getMoviePending(state)
});

class Review extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {movie.reviews.map(re => (
          <Row>
            <Col className="review" lg={2}>
              <div className="user">
                <center>
                  <img className="reviewUserPicture" src={profilepicture} />
                  <h5>{re.user.username}</h5>
                  <div className={"userBanner" + " " + re.user.role.name}>
                    <div>{re.user.role.name}</div>
                  </div>
                  <StarRatings
                    rating={re.starNumber}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="4px"
                    name="rating"
                  ></StarRatings>
                </center>
              </div>
            </Col>
            <Col className="review" lg={10}>
              <div className="comment">{re.comment}</div>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Review);
