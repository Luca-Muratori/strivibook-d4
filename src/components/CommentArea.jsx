import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentArea extends Component {
  state = {
    comment: [],
    bookObj: null,
    isLoading: true,
  };

  fetchComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDc4NzA0NjMsImV4cCI6MTY0OTA4MDA2M30.E0fAlaqcvndTYrKoyFDLp5L4ZuEGLdFZ37zKohfAzVk",
          },
        }
      );
      let data = await response.json();
      this.setState({
        comment: data,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchComment();
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.comment !== this.selectedBook) {
      this.fetchComments();
    }
  };
  render() {
    return (
      <div>
        <CommentList commentToShow={this.state.comment} />
        <AddComment bgColor={"green"} asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
