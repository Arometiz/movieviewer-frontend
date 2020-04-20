import React, { Component } from "react";
import MoviesRow from "../sub-components/moviescard/MoviesRow";
import { Col, Row, Button } from "react-bootstrap";
import "../movies/movies.css";
import Pagination from "react-js-pagination";
import { bindActionCreators } from "redux";
import fetchMoviesAction from "../../apicalls/fetchMovies";
import { connect } from "react-redux";
import { getTotalMovieCount } from "../../reducers/movieListReducer";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchMovies: fetchMoviesAction,
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  totalMovieCount: getTotalMovieCount(state),
});

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 0,
    };
  }

  handlePageChange(pageNumber) {
    const { fetchMovies } = this.props;
    console.log(this.props);
    this.setState({
      activePage: pageNumber,
    });
    pageNumber = pageNumber - 1;
    fetchMovies(pageNumber);
  }

  newMovie() {
    return (window.location.href = "/add-new-movie");
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <Row className="underLineRow">
          <Col lg={11}>
            <h2> </h2>
          </Col>
          <Col lg={1}>
            <Button onClick={() => this.newMovie()}>New</Button>
          </Col>
        </Row>
        <MoviesRow className="movieRow"></MoviesRow>
        <div className="moviePagination">
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={this.state.activePage}
            itemsCountPerPage={16}
            lastPageText="Last"
            firstPageText="First"
            totalItemsCount={this.props.totalMovieCount}
            pageRangeDisplayed={Math.ceil(this.props.totalMovieCount / 16)}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
