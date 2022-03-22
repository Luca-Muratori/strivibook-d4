// import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }));
  }, [asin]);

  // state = {
  //   comment: {
  //     comment: "",
  //     rate: 1,
  //     elementId: null,
  //   },
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     });
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/ ",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDc4NzA0NjMsImV4cCI6MTY0OTA4MDA2M30.E0fAlaqcvndTYrKoyFDLp5L4ZuEGLdFZ37zKohfAzVk",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        setComment({
          comment: "",
          rate: 1,
          elementId: null,
        });
        alert("comment saved");
      } else {
        alert("something is wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="insert your comment"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate this book</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
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
};

export default AddComment;
