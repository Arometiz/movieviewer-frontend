import "../css/allmoviescard.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getMoviesPending,
  getMoviesError,
  getMovies,
  getLinks
} from "../../reducers/movieListReducer";
import fetchMoviesAction from "../../apicalls/fetchMovies";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import { apiUrl, moviePath } from "../../environment";

const mapStateToProps = state => ({
  error: getMoviesError(state),
  movies: getMovies(state),
  pending: getMoviesPending(state),
  links: getLinks(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies: fetchMoviesAction
    },
    dispatch
  );

class Allmoviescard extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    const { movies, links } = this.props;

    if (this.shouldComponentRender())
      return (
        <div className="loader">
          <Loader type="TailSpin" color="#000000" height={100} width={100} />
        </div>
      );

    return (
      <div>
      <center><h1>Movies</h1></center>
      <hr></hr>
        <Row>
          {movies.map(movie => (
            <Col key={movie.movie_id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  src={
                    apiUrl +
                    moviePath +
                    links[1].link +
                    "?movie_id=" +
                    movie.movie_id
                  }
                />
                <Card.Body>
                  <Card.Title>{movie.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Allmoviescard);
