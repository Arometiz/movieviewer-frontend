import "./moviesrow.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getMoviesPending,
  getMoviesError,
  getMovies,
  getLinks,
  getTotalMovieCount
} from "../../../reducers/movieListReducer";
import fetchMoviesAction from "../../../apicalls/fetchMovies";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import { apiUrl, moviePath } from "../../../environment";
import emptyMovieAction from "../../../actions/emptyMovieAction";

const mapStateToProps = state => ({
  error: getMoviesError(state),
  movies: getMovies(state),
  pending: getMoviesPending(state),
  movie: state.movie.movie,
  links: getLinks(state),
  totalMovieCount: getTotalMovieCount(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies: fetchMoviesAction,
      emptyMovie: emptyMovieAction
    },
    dispatch
  );

class MoviesRow extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchMovies, emptyMovie } = this.props;
    emptyMovie();
    fetchMovies(0);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  clickMovie(movie) {
    return (window.location.href = "/movie/" + movie.movie_id);
  }

  arrayFormat(genres) {
    let array = [];
    genres.forEach(genre => {
      array.push(genre.name);
    });

    array.sort((a, b) => a.toString() - b.toString());

    let string = array.toString();
    return string.replace(/\,/g, " / ");
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
        <Row lg={10} className="movieRow">
          {movies.map(movie => (
            <Col
              className="movieCol"
              onClick={() => this.clickMovie(movie)}
              key={movie.movie_id}
            >
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  alt={movie.name}
                  src={
                    apiUrl +
                    moviePath +
                    links[1].link +
                    "?movie_id=" +
                    movie.movie_id
                  }
                />
              </Card>
              <ul>
                <li className="releaseDate">
                  {movie.releaseDate + " - " + this.arrayFormat(movie.genres)}
                </li>
                <li className="movieName">{movie.name}</li>
              </ul>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesRow);
