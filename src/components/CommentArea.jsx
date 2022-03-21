import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentArea extends Component {
  state = {
    comment: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDc1MjMzMTYsImV4cCI6MTY0ODczMjkxNn0.Bkc3aqtgLaR4jw4HN5xZ0l-uoiYaaXIzH4bUipESL88",
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
