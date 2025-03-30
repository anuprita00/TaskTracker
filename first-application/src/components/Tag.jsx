import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  // set different color for different tags using in line style
  const tagStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#15D4C8"},
    Javascript: {backgroundColor: "#ffd12c"},
    React: {backgroundColor: "#4cdafc"},
    default: {backgroundColor: "#f9f9f9"},
  }
// Dynamically styles the tag button based on selected status.
// Uses tagStyle object to apply unique styles for different tags.
// Calls selectTag(tagName) on click to toggle selection.

  return (
    <button type="button"
     className="tag" 
     style={selected ? tagStyle[tagName] : tagStyle.default}
     onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
};

export default Tag;
