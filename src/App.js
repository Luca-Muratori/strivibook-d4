import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./components/CommentArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <WarningSign text="Watch out again!" />
          <MyBadge text="NEW!!" color="info" /> */}

          <Container>
            <Row>
              {/* <Col lg={6} md={6} sm={12}>
                <SingleBook book={fantasyBooks[0]} />
              </Col> */}
              <Col lg={8} md={8} sm={12}>
                <BookList books={fantasyBooks} />
              </Col>
              <Col lg={4} md={4} sm={12}>
                <CommentArea books={fantasyBooks} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
