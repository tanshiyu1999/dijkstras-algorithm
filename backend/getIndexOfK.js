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

var plane = [
  [11, 21, 31, 41, 51],
  [12, 22, 32, 42, 52],
  [13, 23, 33, 43, 53],
  [14, 24, 34, 44, 54],
  [15 ,25 ,35, 45, 55],
  [16, 26, 36, 46, 56],
 ];
// return [1, 29] => ie array[1][29]
console.log(getIndexOfK(plane, 56));
