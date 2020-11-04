import React, { Component } from "react";

export class InputTag extends Component {
  state = {
    tags: [],
  };

  removeTag = (i) => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  };

  inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (
        this.state.tags.find((tag) => tag.toLowerCase() === val.toLowerCase())
      ) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val] });
      this.tagInput.value = null;

      // console.log(this.state.tags);
    } else if (e.key === "Backspace" && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tags !== this.state.tags) {
      this.props.grabTags(this.state.tags);
    }
  }

  render() {
    const { tags } = this.state;
    return (
      <div className="input-tag">
        <ul className="input-tag__tags d-flex align-items-baseline">
          {tags.map((tag, i) => (
            <li key={tag} className="mr-2 d-flex align-items-center">
              {tag}
              <i
                className="fa fa-times fa-1x ml-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.removeTag(i);
                }}
              />
            </li>
          ))}
          <li className="input-tag__tags__input">
            <input
              type="text"
              className="form-input-lg"
              onKeyDown={this.inputKeyDown}
              ref={(c) => {
                this.tagInput = c;
              }}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default InputTag;
