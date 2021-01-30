const React = require("react");
const { measureMyInputText } = require("../../utils/style");

const PuzzleTitle = ({ width, title, author, setTitle, setAuthor }) => {
  const [authorWidth, setAuthorWidth] = React.useState(60);
  const [titleWidth, setTitleWidth] = React.useState(75);
  
  const handleChange = (e, setFunc, setWidthFunc) => {
    console.log("setting value", e.target.value);
    e.preventDefault();
    setFunc(e.target.value);
  }

  return (
    <div>
      <div class="puzzle-info" id="puzzle-info">
        <input id="title" class="inline-content-editable" style={{ width: measureMyInputText(title) + 'px' }} value={title} type="text" onChange={(e) => handleChange(e, setTitle, setTitleWidth)} />
        <span>by </span>
        <input id="author" class="inline-content-editable" style={{ width: measureMyInputText(author) + 'px' }} value={author} type="text" onChange={(e) => handleChange(e, setAuthor, setAuthorWidth)} />
      </div>
      {measureMyInputText(author) + measureMyInputText(title) > width - 210 ? <div><br/><br/></div> : null}
    </div>
  );
}

module.exports = PuzzleTitle;