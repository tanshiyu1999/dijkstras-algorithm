function getIndexOfK(arr, k){
    if (!arr){
        return [];
    }

    for(var i=0; i<arr.length; i++){
        var index = arr[i].indexOf(k);
        if (index > -1){
            return [i, index];
        }
    }

    return [];
}



function dijkstra(y1 = 2, x1 = 1, y2 = 2, x2 = 4) {
  // start and end are indexes within the plane array.
  // it is weighted, 90 degree turns will take 1 cost, moving from 1 array to the next will also take 1 cost.

  var plane = [   //BUILD THE WALL< DONT EXPAND IF HIT WALL
    [11, 21, 31, 41, 51],
    [12, 22, 32, 42, 52],
    [13, 23, 33, 43, 53],
    [14, 24, 34, 44, 54],
    [15 ,25 ,35, 45, 55],
    [16, 26, 36, 46, 56],
  ];

  var beginning = plane[y1][x1];
  var ending = plane[y2][x2];

  var found = [beginning];

  var founded = [];

  var int = 0;

  for (var i = getIndexOfK(plane, found[int])[0], j = getIndexOfK(plane, found[int])[1]; !(ending in found); int++ ) {
    if(!(found[i][j] in founded)) {
      if (plane[i++][j] != undefined) { //down
        found.push(plane[i++][j]);
        founded.push(plane[i++][j]);
      }
      if (plane[i--][j] != undefined) { //up
        found.push(plane[i--][j]);
        founded.push(plane[i--][j]);
      }
      if (plane[i][j++] != undefined) { //right
        found.push(plane[i][j++]);
        founded.push(plane[i][j++]);
      }
      if (plane[i][j--] != undefined) { //left
        found.push(plane[i][j--]);
        founded.push(plane[i][j--]);
      }
    }
  }
  console.log(found);
}

dijkstra()
