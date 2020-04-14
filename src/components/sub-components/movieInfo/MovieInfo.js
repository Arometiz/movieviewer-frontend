import React, { Component } from "react";
import { Col, Card, Row } from "react-bootstrap";
import "./movieinfo.css";
import data from "../../../data/yearList";
import ImageUploader from "react-images-upload";

const yearList = [
  { id: "2020", value: "2020" },
  { id: "2019", value: "2019" },
  { id: "2018", value: "2018" },
  { id: "2017", value: "2017" },
  { id: "2016", value: "2016" },
  { id: "2015", value: "2015" },
  { id: "2014", value: "2014" },
  { id: "2013", value: "2013" },
  { id: "2012", value: "2012" },
  { id: "2011", value: "2011" },
  { id: "2010", value: "2010" },
  { id: "2009", value: "2009" },
  { id: "2008", value: "2008" },
  { id: "2007", value: "2007" },
  { id: "2006", value: "2006" },
  { id: "2005", value: "2005" },
  { id: "2004", value: "2004" },
  { id: "2003", value: "2003" },
  { id: "2002", value: "2002" },
  { id: "2001", value: "2001" },
  { id: "2000", value: "2000" },
  { id: "1999", value: "1999" },
  { id: "1998", value: "1998" },
];

const genreList = [
  { id: "1", value: "Science Fiction" },
  { id: "2", value: "Action" },
];

function Options({ options }) {
  return options.map((option) => (
    <option key={option.id} value={option.value}>
      {option.value}
    </option>
  ));
}

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <div className="movieInfo">
        <Row>
          <Col lg={6}>
            <Card style={{ width: "100%" }}>
              <Card.Title>Movie</Card.Title>
              <h2></h2>
              <Card.Body>
                <ul>
                  <li className="movieNameArea">
                    <label>Name:</label>
                    <input className="movieInput"></input>
                  </li>
                  <li className="movieDescriptionArea">
                    <label>Description:</label>
                    <textarea className="descriptionInput"></textarea>
                  </li>
                  <li className="movieReleaseDateArea">
                    <label>Release Date:</label>
                    <select className="releaseDateInput">
                      <Options options={yearList}></Options>
                    </select>
                  </li>
                  <li className="youtubeArea">
                    <label>Youtube id:</label>
                    <input className="youtubeIdInput"></input>
                  </li>
                  <li className="movieGenreArea">
                    <label>Genre:</label>
                    <select className="genreInput">
                      <Options options={genreList}></Options>
                    </select>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card style={{ width: "100%" }}>
              <Card.Title>Image</Card.Title>
              <h2></h2>
              <Card.Body>
                <ImageUploader
                  withIcon={true}
                  buttonText="Choose images"
                  onChange={this.onDrop}
                  imgExtension={[".jpg"]}
                  maxFileSize={5242880}
                  withPreview={true}
                  singleImage={true}
                  label="Max file size: 5mb, accepted: jpg"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MovieInfo;
