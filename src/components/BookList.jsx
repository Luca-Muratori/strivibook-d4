import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { Link } from "react-router-dom";

class BookList extends React.Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  render() {
    return (
      <Container className="d-flex">
        <Row>
          <Col lg={12}>
            <Link to="/registration">Registration</Link>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>

          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col lg={3} xs={3} key={b.asin}>
                <SingleBook
                  selectedBook={this.state.selectedBook}
                  book={b}
                  changeSelectedBook={(asin) =>
                    this.setState({
                      selectedBook: asin,
                    })
                  }
                />
              </Col>
            ))}
        </Row>
        <Col md={4}>
          <CommentArea asin={this.state.selectedBook} />
        </Col>
      </Container>
    );
  }
}

export default BookList;
