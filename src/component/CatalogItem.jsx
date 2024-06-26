import React from "react";
import {FaBookmark} from "react-icons/fa";
import {FiBookmark} from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.item[0],
      author: this.props.item[1],
      publisher: this.props.item[2],
      year: this.props.item[3],
      bookmark: Math.random() > 0.8,
      like: Math.ceil(Math.random() * 100),
      isLike: false
    };

    this.checkBookmark = this.checkBookmark.bind(this);
  }

  checkBookmark = () => {
    this.setState((state) => {
      return { bookmark: !state.bookmark };
    });
  };

  checkLike = () => {
    this.setState((state) => {
        return { isLike: !state.isLike };
      });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">{this.state.title}</h5>
          <p className="card-text author">{this.state.author}</p>
          <p className="card-text text-muted publisher">
            {this.state.publisher}
            <small className="year"> {this.state.year}</small>
          </p>
        </div>
        <div className="card-footer d-flex">
            <p className="flex-grow-1 text-start m-0" onClick={this.checkLike}>
                {this.state.isLike ? <FaThumbsUp /> : <FaRegThumbsUp />} {this.state.like} like(s)
            </p>
            <p className="text-end m-0" onClick={this.checkBookmark}>
                {this.state.bookmark ? <FaBookmark /> : <FiBookmark />}
            </p>
        </div>
      </div>
    );
  }
}

export default CatalogItem;
