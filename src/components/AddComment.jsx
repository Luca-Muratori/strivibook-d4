import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments ",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDc1NTEwMTgsImV4cCI6MTY0ODc2MDYxOH0.4i43vQkg0dC82l_Z2_gCA4PHAIkXmcEetnLAKBM8Tbk",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("comment saved");
      } else {
        alert("something is wrong");
      }
    } catch (error) {
      console.log(error);
    }
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
              onChange={(e) =>
                this.setState({
                  comment: { ...this.state.comment, comment: e.target.value },
                })
              }
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rate this book</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: { ...this.state.comment, rate: e.target.value },
                })
              }
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
