import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      //elementId: ,this.book.asin
    },
  };

  handleChange = (fieldToUpdate, value) => {
    this.setState({
      comment: { ...this.state.comment, [fieldToUpdate]: value },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/ " + this.props.id,
        {
          method: "POST",
          body: JSON.stringify(this.setState.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDc1MjMzMTYsImV4cCI6MTY0ODczMjkxNn0.Bkc3aqtgLaR4jw4HN5xZ0l-uoiYaaXIzH4bUipESL88",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("comment saved");
        this.emptyArr();
      } else {
        alert("something is wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  emptyArr = () => {
    this.setState({
      comment: {
        comment: "",
        rate: "",
        //elementId: ,this.book.asin
      },
    });
  };
  render() {
    return (
      <div style={{ backgroundColor: this.props.bgColor }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="insert your comment"
              value={this.state.comment.comment}
              onChange={(e) => this.handleChange("comment", e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate this book</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) => this.handleChange("rate", e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Submit the comment</Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
