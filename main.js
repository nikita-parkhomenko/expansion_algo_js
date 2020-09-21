function minWalk(gridList, startX, startY, endX, endY) {
  const newGrid = gridList.map(row => row.split(''));
  newGrid[startX][startY] = 0;
  newGrid[endX][endY] = 'end';

  let searchCount = 0;
  let findFinish = false;
  let maxWidth = newGrid[0].length - 1;
  let maxHeight = newGrid.length - 1;

  function expansion(x, y) {
    if (x <= maxHeight && y <= maxWidth && newGrid[x][y] === 'end') {
      console.log('end point found')
      findFinish = true;
    }
    if (x <= maxHeight && y <= maxWidth && newGrid[x][y] === '.') {
      newGrid[x][y] = searchCount + 1;
    }
  }

  while(!findFinish) {
    newGrid.filter((row, rowIndex) => {
      row.filter((cell, cellIndex) => {
        if (cell === searchCount) {
          let x = rowIndex;
          let y = cellIndex;
  
          expansion(x - 1, y);
          expansion(x - 1, y + 1);
          expansion(x, y + 1);
          expansion(x + 1, y + 1);
          expansion(x + 1, y);
          expansion(x + 1, y - 1);
          expansion(x, y - 1);
          expansion(x - 1, y - 1);
        }
      })
    })

    searchCount += 1;
  }

  console.log(newGrid)
  return searchCount;
};


const result = minWalk(
  [
    '.X..',
    'XXX.',
    '....',
    '....',
  ], 
  2, 1,
  0, 2
);

console.log(result)