const React = require("react");
const { Text, View, StyleSheet } = require("@react-pdf/renderer");

module.exports = function PrintGrid({ puzzle, styles }) {
  const { grid, getNextClueNumber } = puzzle;
  return (
    <View style={styles.grid}>
      {grid.map((columns, row) => (
        <View key={'row' + row} style={styles.row}>
          {columns.map((cell, i) => {
            const currentCell = grid[row][i];
            const clue = currentCell.clue || {};
            const label = (clue.isAcrossStart && clue.acrossClueNumber) || (clue.isDownStart && clue.downClueNumber);
            const cellStyle = [styles.cell];
            if (cell.isBlackSquare) { cellStyle.push(styles.blackCell); }
            if (cell.style === 'shaded') { cellStyle.push(styles.markedCell); }
            if (row === grid.length - 1) { cellStyle.push(styles.lastRow); }
            if (i === columns.length - 1) { cellStyle.push(styles.lastColumn); }
            return (
              <View key={'cell' + row + '_' + i}>
                <Text style={cellStyle}>{label}</Text>
              </View>
            )
          })}
        </View>
      ))}
    </View>
  );
}
