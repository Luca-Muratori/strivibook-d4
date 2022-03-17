import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
class CommentArea extends Component {
  state = {
    comment: [],
  };

  componentDidMount() {
    this.fetchComment();
  }

  fetchComment = async (id) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
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
        {/* <CommentList comment={this.state.comment} /> */}
        <AddComment bgColor={"green"} id={this.props.id} />
      </div>
    );
  }
}

export default CommentArea;
