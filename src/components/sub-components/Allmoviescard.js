import "../css/allmoviescard.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React, { Component } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
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
    console.log(this.props);
    if (pending === false) return false;
    return true;
  }

  clickMovie(movie) {
    return window.location.href = "/movie/" + movie.movie_id;
  }

  newMovie(){
    return window.location.href= "movie/add-new-movie";
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
        <h1>Movies</h1>
        <Row className="underLineRow">
          <Col lg={11}>
            <h2></h2>
          </Col>
          <Col lg={1}>
            <Button onClick={() => this.newMovie()}>Add new movie</Button>
          </Col>
        </Row>
        <Row lg={10} className="movieRow">
          {movies.map(movie => (
            <Col onClick={() => this.clickMovie(movie)} key={movie.movie_id}>
              <Card style={{ width: "16rem" }}>
                <Card.Img
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
                <li className="releaseDate">Release: {movie.releaseDate}</li>
                <li className="movieName">{movie.name}</li>
              </ul>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Allmoviescard);
