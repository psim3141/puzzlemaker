const React = require("react");
const Row = require("./Row");
const Menu = require("./Menu");
const { PuzzleContext } = require("./Context");
const Title = require("./Title");
const CurrentClues = require("./CurrentClues");

const Puzzle = ({ initialGrid }) => {
  
  const gridSizeDesc = (length) => {
    if (length > 18) {
     return "largegrid";
    } else if (length > 12) {
     return "mediumgrid";
    } else {
     return "smallgrid";
    }
  };
  
  return (
    <PuzzleContext.Consumer>
      {puzzle => (
        <div>
          <Title
            width={puzzle.grid[0].length * 40}
            title={puzzle.title}
            author={puzzle.author}
            setTitle={puzzle.setTitle}
            setAuthor={puzzle.setAuthor}
          />
          <div class="puzzle-container">
            <Menu puzzle={puzzle} />
            <div class={"puzzle-grid " + gridSizeDesc(puzzle.grid[0].length)}>
              {puzzle.grid.map((columns, i) => (
                <Row key={`row-${i}`} row={i} columns={columns} />
              ))}
            </div>
            <CurrentClues
              across={puzzle.words.across}
              down={puzzle.words.down}
              puzzle={puzzle}
            />
          </div>
        </div>
      )}
    </PuzzleContext.Consumer>
  );
};

module.exports = Puzzle;
