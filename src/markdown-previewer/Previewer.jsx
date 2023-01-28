import React, { useState } from "react";
import { INITIAL_EDITOR_STRING } from "./constants";
import { marked } from "marked";
import "./Previewer.css"

marked.setOptions({
  breaks: true
});

const Previewer = () => {
  const [state, setState] = useState(INITIAL_EDITOR_STRING);

  const onChange = ({ target: { value } }) => {
    setState(value)
  }

  return (
    <>
      <h1 id="title">Markdown Previewer</h1>
      <div className="container">
        <textarea
          id="editor"
          onChange={onChange}
          value={state}
          placeholder="Enter Markdown..." />
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked?.parse(state) }}>
        </div>
      </div>
    </>
  );
}

export default Previewer;