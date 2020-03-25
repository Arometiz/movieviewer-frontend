import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getMoviePending,
  getMovieError,
  getMovie
} from "../reducers/movieReducer";
import { bindActionCreators } from "redux";
import fetchMovieAction from "../apicalls/fetchMovie";
import Loader from "react-loader-spinner";
import { Card, Col, Row, Button } from "react-bootstrap";
import { apiUrl, moviePath } from "../environment";

const mapStateToProps = state => ({
  error: getMovieError(state),
  movie: getMovie(state),
  pending: getMoviePending(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovie: fetchMovieAction
    },
    dispatch
  );

class Movie extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchMovie } = this.props;
    fetchMovie(this.props.match.params.id);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    const { movie } = this.props;
    if (this.props.movie !== null) {
      console.log(this.props);
    }
    if (this.props.movie !== null) {
      return (
        <div>
          <Row className="underLineRow">
            <Col lg={11}>
              <h2></h2>
            </Col>
            <Col lg={1}>
              <Button onClick={() => this.newMovie()}>Add new movie</Button>
            </Col>
          </Row>
          <Row lg={10} className="movieRow">
            <Col>
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  src={
                    apiUrl +
                    moviePath +
                    "/single-movie-image?movie_id=" +
                    movie.movieId
                  }
                />
              </Card>
              <ul>
                <li className="releaseDate">Release: {movie.releaseDate}</li>
                <li className="movieName">{movie.name}</li>
              </ul>
            </Col>
          </Row>
        </div>
      );
    }
    return (
        <div className="loader">
          <Loader type="TailSpin" color="#000000" height={100} width={100} />
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
