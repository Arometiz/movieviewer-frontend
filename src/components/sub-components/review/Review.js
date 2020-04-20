import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  getMoviePending,
  getMovieError,
  getMovie,
} from "../../../reducers/movieReducer";
import "./review.css";
import StarRatings from "react-star-ratings";
import profilepicture from "../../../pictures/profilepicture.jpg";
import Pagination from "react-js-pagination";

const mapStateToProps = (state) => ({
  error: getMovieError(state),
  movie: getMovie(state),
  links: state.movies.links,
  pending: getMoviePending(state),
});

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
      totalItems: props.movie.reviews.length,
      reviewArray: props.movie.reviews.slice(0, 5),
    };
  }

  handlePageChange(pageNumber) {
    this.setState({
      reviewArray: this.props.movie.reviews.slice(
        (pageNumber - 1) * 5,
        pageNumber * 5
      ),
      activePage: pageNumber,
    });
  }

  renderPagination() {
    if (this.state.reviewArray.length !== 0) {
      console.log(this.state.reviewArray);
      return (
        <div className="reviewPagination">
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={this.state.activePage}
            itemsCountPerPage={5}
            lastPageText="Last"
            firstPageText="First"
            totalItemsCount={this.state.totalItems}
            pageRangeDisplayed={Math.ceil(this.state.totalItems / 5)}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.reviewArray.map((review) => (
          <Row>
            <Col className="review" lg={4}>
              <div className="user">
                <center>
                  <img className="reviewUserPicture" src={profilepicture} />
                  <h5>{review.user.username}</h5>
                  <div className={"userBanner" + " " + review.user.role.name}>
                    <div>{review.user.role.name}</div>
                  </div>
                  <StarRatings
                    rating={review.starNumber}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="4px"
                    name="rating"
                  ></StarRatings>
                </center>
              </div>
            </Col>
            <Col className="review" lg={8}>
              <div className="comment">{review.comment}</div>
            </Col>
          </Row>
        ))}
        {this.renderPagination()}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Review);
