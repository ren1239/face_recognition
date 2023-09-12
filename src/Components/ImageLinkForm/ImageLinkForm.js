import React from "react";

function ImageLinkForm() {
  return (
    <div>
      <p>This Brain will detect faces</p>
      <div className="center">
        <div className="center br2 pa2 shadow-2">
          <input type="text" className="f4 w-70 pa2 center br1" />
          <button className="w-30 grow f4 link ph3 pv2 dib bg-light-purple br1">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
