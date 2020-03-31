import "./moviescard.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React, { Component } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
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
import Pagination from "react-js-pagination";

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

class Allmoviescard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0
    }

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchMovies, emptyMovie } = this.props;
    emptyMovie();
    fetchMovies(0);
  }

  handlePageChange(pageNumber) {
    const { fetchMovies } = this.props;
    console.log(this.props.totalMovieCount);
    this.setState({ 
      activePage: pageNumber
    });
    pageNumber = pageNumber - 1;
    fetchMovies(pageNumber);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  clickMovie(movie) {
    console.log(movie);
    return (window.location.href = "/movie/" + movie.movie_id);
  }

  newMovie() {
    return (window.location.href = "movie/add-new-movie");
  }

  arrayFormat(genres) {
    let array = [];
    genres.forEach(genre => {
      array.push(genre.name);
    });

    array.sort((a, b) => a.toString() - b.toString());

    let string = array.toString();
    return string.replace(/\,/g,' / ');
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
            <h2> </h2>
          </Col>
          <Col lg={1}>
            <Button onClick={() => this.newMovie()}>Add new movie</Button>
          </Col>
        </Row>
        <Row lg={10} className="movieRow">
          {movies.map(movie => (
            <Col
              className="movieCol"
              onClick={() => this.clickMovie(movie)}
              key={movie.movie_id}
            >
              <Card style={{ width: "16rem" }}>
                <Card.Img
                  alt= {movie.name}
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
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={16}
          hideFirstLastPages
          totalItemsCount={17}
          pageRangeDisplayed={Math.ceil( (this.props.totalMovieCount/16)) }
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Allmoviescard);
