import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import './text.css'


const Block = Quill.import("blots/block");
Block.tagName = "DIV";
Quill.register(Block, true);

class RichTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (value) => {
    this.setState({ text: value });
  };

  handleSave = () => {
    console.log("Saved content:", this.state.text);
  };

  render() {
    const modules = {
      toolbar: [
        [{ header: "1" }, { header: "2" }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        [{ align: [] }],
        ["clean"],
      ],
    };

    return (
      <div>
        <div className="editor-toolbar">
          <button onClick={this.handleSave} className="save">Save</button>
        </div>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          modules={modules}
        />
      </div>
    );
  }
}

export default RichTextEditor;
