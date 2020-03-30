import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMoviePending,
  getMovieError,
  getMovie
} from "../../reducers/movieReducer";
import { bindActionCreators } from "redux";
import fetchMovieAction from "../../apicalls/fetchMovie";
import Loader from "react-loader-spinner";
import { Card, Col, Row } from "react-bootstrap";
import { apiUrl, moviePath } from "../../environment";
import YouTube from "react-youtube";
import "./movie.css";

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
    const opts = {
      height: "390",
      width: "300",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const { movie } = this.props;
    if (this.props.movie !== null) {
      console.log(this.props);
    }
    if (this.props.movie !== null) {
      return (
        <div>
          <Row>
            <Col className="movieInformation" style={{ flexGrow: "1" }} lg={5}>
              <div className="box">
                <Col>
                  <div>
                    <img
                      className="movieImage"
                      src={
                        apiUrl +
                        moviePath +
                        "/single-movie-image" +
                        "?movie_id=" +
                        movie.movie.movieId
                      }
                    />
                  </div>
                  <div>
                    <ul className="justify-center" style={{ flexShrink: "1" }}>
                      <li className="movieHeader">
                        {movie.movie.name +
                          " (" +
                          movie.movie.releaseDate +
                          ")"}
                      </li>
                      <li className="movieGenres">
                        {this.arrayFormat(movie.movie.genres)}
                      </li>
                      <br></br>
                      <li className="movieDescription">
                        {movie.movie.description}
                      </li>
                    </ul>
                  </div>
                </Col>
              </div>
            </Col>
            <Col lg={3}>
              <ul>
                <li className="castSection">Cast</li>
                <hr></hr>
                <li className="movieRole">Deadpool</li>
                <li className="realName">Ryan Reynolds</li>
                <hr></hr>
                <li className="movieRole">Thor</li>
                <li className="realName">Chris Hemsworth</li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <li className="reviewSection">Reviews</li>
                <hr></hr>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className="youtubePlayer">
              <YouTube
                videoId={movie.movie.youtube_id}
                opt={this.opts}
              ></YouTube>
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
