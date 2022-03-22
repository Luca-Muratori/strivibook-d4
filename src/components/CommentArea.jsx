import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentArea extends Component {
  state = {
    comment: [],
    isLoading: true,
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin)
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            this.props.asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDc4NzA0NjMsImV4cCI6MTY0OTA4MDA2M30.E0fAlaqcvndTYrKoyFDLp5L4ZuEGLdFZ37zKohfAzVk",
            },
          }
        );
        let data = await response.json();
        console.log(data);
        this.setState({
          comment: data,
        });
      } catch (error) {
        console.log(error);
      }
  };
  render() {
    return (
      <div>
        <AddComment bgColor={"green"} asin={this.props.asin} />
        <CommentList commentToShow={this.state.comment} />
      </div>
    );
  }
}

export default CommentArea;
