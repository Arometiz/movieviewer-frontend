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
import { Col, Row } from "react-bootstrap";
import { apiUrl, moviePath, actorPath } from "../../environment";
import YouTube from "react-youtube";
import "./movie.css";

const mapStateToProps = state => ({
  error: getMovieError(state),
  movie: getMovie(state),
  links: state.movies.links,
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
    fetchMovie(this.props.match.params.id, this.props.links[0].link);
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
    const { movie } = this.props;
    if (!this.pending && this.props.movie != null) {
      return (
        <div>
          <Row>
            <Col className="movieInformation" lg={7}>
              <div className="box">
                <Col>
                  <div className="movieDiv">
                    <ul className="justify-center">
                      <li className="movieHeader">
                        {movie.movie.name +
                          " (" +
                          movie.movie.releaseDate +
                          ")"}
                      </li>
                    </ul>
                    <div className="movieBox">
                      <img
                        alt={movie.movie.name}
                        className="movieImage"
                        src={
                          apiUrl +
                          moviePath +
                          this.props.links[1].link +
                          "?movie_id=" +
                          movie.movie.movieId
                        }
                      />
                      <YouTube
                        className="youtubePlayer"
                        videoId={movie.movie.youtube_id}
                      ></YouTube>
                    </div>
                    <ul>
                      <li>
                        <div className="movieGenres">
                          {this.arrayFormat(movie.movie.genres)}
                        </div>
                      </li>
                      <li>
                        <div className="movieDescription">
                          {movie.movie.description}
                        </div>
                      </li>
                    </ul>

                    <Row lg={12} className="castSection">
                      <img src></img>
                      <ul>
                        <li>Cast</li>
                        <h2 id="mainMovieLine"> </h2>
                          {movie.movie.actors.map(actor => (
                        <Col lg={3} className="actor">
                            <ul className="actorItem">
                              <img
                                className="actorPicture"
                                src={
                                  apiUrl +
                                  actorPath +
                                  "/actor-image?actor_id=" +
                                  actor.actor_id
                                }
                              ></img>
                              <div className="actorInformation">
                                <li className="movieRole">{actor.role}</li>
                                <li className="realName">{actor.name}</li>
                              </div>
                            </ul>
                        </Col>
                          ))}
                      </ul>
                    </Row>
                  </div>
                </Col>
              </div>
            </Col>
            <Col lg={5}>
              <ul>
                <li className="reviewSection">Reviews</li>
                <h2></h2>
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
