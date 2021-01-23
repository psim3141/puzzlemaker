const React = require("react");
const Puzzle = require("./Puzzle");
const { initGrid } = require("./utils");
const DEFAULT_BLOCKS = [
  [0, 4], // should trigger 14, 10 (if size is 15) -- for rotational symmetry
  [1, 4],
  [2, 4],
  [3, 4],
  [0, 10],
  [1, 10],
  [2, 10],
  [6, 0],
  [6, 1],
  [6, 2],
  [6, 3]
];

const Builder = function() {
  const grid = initGrid({ size: 15 });
  
  const toggleEdit = e => {
    console.log(editMode)
    setEditMode((prevSetting) => !prevSetting)
    console.log("changed to: ", editMode)
  }
  const { DesktopDownloadIcon } = require("@primer/octicons-react");
  return (
    <div class="container">
      <h1 class="title">Puzzlemaker</h1>
      <p>[Title] by [Author] <DesktopDownloadIcon size={24} /></p>
      <Puzzle initialGrid={grid} />
    </div>
  );
};

module.exports = Builder;
