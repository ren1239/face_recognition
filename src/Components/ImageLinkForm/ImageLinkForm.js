import React from "react";

function ImageLinkForm({ onInputChange, onSubmit }) {
  return (
    <div>
      <p>This Brain will detect faces</p>
      <div className="center">
        <div className="center br2 pa2 shadow-2">
          <input
            type="text"
            className="f4 w-70 pa2 center br1"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib bg-light-purple br1"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
