const React = require("react");
const KeyBoard = require("./KeyBoard");
const MobileMenu = require("./MobileMenu");
const { SuggestionsList } = require("./suggestions");
const Current = require("./Current");

const CurrentClues = ({ across, down, puzzle }) => {
  const [row, column] = puzzle.activeCell;
  const { acrossNumber, downNumber } = puzzle.getCluesForCell(row, column);
  const [mobileView, setMobileView] = React.useState("keyboard");
  const [downHighlight, setDownHighlight] = React.useState(null);
  const [acrossHighlight, setAcrossHighlight] = React.useState(null);
  const [downSuggestions, setDownSuggestions] = React.useState([]);
  const [acrossSuggestions, setAcrossSuggestions] = React.useState([]);

  const showDownNonCrosses = (e) => {
    e.stopPropagation();
    puzzle.setDownFilter([]);
    puzzle.pencilOut("across");
  };

  const showAcrossNonCrosses = (e) => {
    e.stopPropagation();
    puzzle.setAcrossFilter([]);
    puzzle.pencilOut("down");
  };

  return (
    <div className="current-clues" id="current-clues">
      <MobileMenu
        mobileView={mobileView}
        setMobileView={setMobileView}
        acrossNumber={acrossNumber}
        acrossWord={across.word.toUpperCase()}
        downNumber={downNumber}
        downWord={down.word.toUpperCase()}
        puzzle={puzzle}
      />
      {acrossNumber == "-" && downNumber == "-" ? (
        <i>Select box to view suggestions...</i>
      ) : (
        ""
      )}
      <div id="across" className={mobileView == "across" ? "activemobile" : ""}>
        {acrossNumber !== "-" ? (
          <React.Fragment>
            <Current
              clueNumber={acrossNumber}
              word={across.word}
              filterWord={puzzle.acrossFilter[0]}
              showNonCrosses={showAcrossNonCrosses}
              direction="across"
            />
            <SuggestionsList
              ad="across"
              puzzle={puzzle}
              myHighlight={acrossHighlight}
              setOtherHighlight={setDownHighlight}
              myFilter={puzzle.acrossFilter}
              otherFilter={puzzle.downFilter}
              setOtherFilter={puzzle.setDownFilter}
              mySuggestions={acrossSuggestions}
              setMySuggestions={setAcrossSuggestions}
              otherSuggestions={downSuggestions}
            />
          </React.Fragment>
        ) : null}
      </div>
      <div id="down" className={mobileView == "down" ? "activemobile" : ""}>
        {downNumber !== "-" ? (
          <React.Fragment>
            <Current
              clueNumber={downNumber}
              word={down.word}
              filterWord={puzzle.downFilter[0]}
              showNonCrosses={showDownNonCrosses}
              direction="down"
            />
            <SuggestionsList
              ad="down"
              puzzle={puzzle}
              myHighlight={downHighlight}
              setOtherHighlight={setAcrossHighlight}
              myFilter={puzzle.downFilter}
              otherFilter={puzzle.acrossFilter}
              setOtherFilter={puzzle.setAcrossFilter}
              mySuggestions={downSuggestions}
              setMySuggestions={setDownSuggestions}
              otherSuggestions={acrossSuggestions}
            />
          </React.Fragment>
        ) : null}
      </div>
      <KeyBoard puzzle={puzzle} mobileView={mobileView} />
    </div>
  );
};

module.exports = CurrentClues;
