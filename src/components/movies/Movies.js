import React, { Component } from "react";
import MoviesRow from "../sub-components/moviescard/MoviesRow";
import { Col, Row, Button } from "react-bootstrap";
import '../movies/movies.css';
import Pagination from "react-js-pagination";
import { bindActionCreators } from "redux";
import fetchMoviesAction from "../../apicalls/fetchMovies";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchMovies: fetchMoviesAction
    },
    dispatch
  );

class Movies extends Component {
  constructor(props){
    super(props)

    this.state = {
      activePage: 0
    };
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

  newMovie() {
    return (window.location.href = "movie/add-new-movie");
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
            <Button onClick={() => this.newMovie()}>Add new movie</Button>
          </Col>
        </Row>
        <MoviesRow></MoviesRow>
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={16}
          hideFirstLastPages
          totalItemsCount={17}
          pageRangeDisplayed={Math.ceil(this.props.totalMovieCount / 16)}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Movies);
