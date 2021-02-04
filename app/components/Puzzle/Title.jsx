const React = require("react");
const { measureMyInputText } = require("../../utils/style");

const PuzzleTitle = ({ titleWidth, authorWidth, setTitleWidth, setAuthorWidth, title, author, setTitle, setAuthor }) => {
  
  const handleChange = (e, setFunc, setWidth) => {
    e.preventDefault();
    setFunc(e.target.value);
    //setWidth(measureMyInputText(e.target.value));
  }

  return (
    <div class="infoblock">
      <div class="puzzle-info" id="puzzle-info">{ titleWidth } { authorWidth }
        <input id="title" placeholder="Untitled" class="inline-content-editable" style={{ width: (title.length ? measureMyInputText(title) : measureMyInputText("Untitled"))+ "px" }} value={title} type="text" onChange={(e) => handleChange(e, setTitle, setTitleWidth)} />
        <span>by </span>
        <input id="author" placeholder="Author" class="inline-content-editable" style={{ width: (author.length ? measureMyInputText(author) : measureMyInputText("Author"))+ "px" }} value={author} type="text" onChange={(e) => handleChange(e, setAuthor, setAuthorWidth)} />
      </div>
    </div>
  );
}

module.exports = PuzzleTitle;