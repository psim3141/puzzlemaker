const React = require("react");
const { Link } = require("react-router-dom");
const Puzzle = require("./Puzzle");

const { initGrid } = require("./utils");

const Builder = function({ location }) {
  const { rows, columns } = location.state || {};
  const symmetry = location.symmetry || true;
  const grid = initGrid({ rows: rows || 15, columns: columns || 15 });
  
  return (
    <div class="container">
      <h1 class="title">Puzzle<span class="accent-text">maker</span></h1>
      <Puzzle initialGrid={grid} />
    </div>
  );
};

module.exports = Builder;
