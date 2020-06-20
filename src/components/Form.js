import React from "react";

function Form(props) {
  return (
    <div className={props.className} style={props.style}>
      <div className="urlEntry">
        <label>API URL:</label>
        <input type="text" value={props.url} onChange={props.onURLChange} />
      </div>
      <div className="methodSelect">
        <select onChange={props.onMethodChange}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  );
}

export default Form;
