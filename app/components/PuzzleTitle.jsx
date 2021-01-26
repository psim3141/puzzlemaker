const React = require("react");
const { measureMyInputText } = require("./utils");

const PuzzleTitle = () => {
  const [title, setTitle] = React.useState("Untitled");
  const [author, setAuthor] = React.useState("Author");
  let width = 160;
  
  const handleTitleChange = e => {
    e.preventDefault();
    e.target.style.width = measureMyInputText(e.target.id) + 'px';
    setTitle(e.target.value);
  }
  const handleAuthorChange = e => {
    e.preventDefault();
    let measuredWidth = measureMyInputText(e.target.id)
    e.target.style.width =  + 'px';
    setAuthor(e.target.value);
  }
  return (
    <div>
      <div class="puzzle-info">
        <input id="title" class="inline-content-editable" style={{ width: '66px' }} value={title} type="text" onChange={handleTitleChange} />
        <span>by </span>
        <input id="author" class="inline-content-editable" style={{ width: '57px' }} value={author} type="text" onChange={handleAuthorChange} />
      </div>
      {width > 200 ? <br/> : null}
    </div>
  );
}

module.exports = PuzzleTitle;