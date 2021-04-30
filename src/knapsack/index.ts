interface branchParams {
  value: number,
  weight: number
};

export default function knapsack(items: Array<branchParams>, capacity: number){
    var memo:any = [];
  
    for (var i = 0; i < items.length; i++) {
      var row = [];
      for (var cap = 1; cap <= capacity; cap++) {
        row.push(getSolution(i,cap));
      }
      memo.push(row);
    }
  
    return(getLast());
  
    function getLast(){
      var lastRow = memo[memo.length - 1];
      return lastRow[lastRow.length - 1];
    }
  
    function getSolution(row: number,cap: number){
      const NO_SOLUTION = {maxValue:0, subset:[]};
      var col = cap - 1;
      var lastItem = items[row];
      var remaining = cap - lastItem.weight;
      var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
      var lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;
      if(remaining < 0){
        return lastSolution;
      }
      var lastValue = lastSolution.maxValue;
      var lastSubValue = lastSubSolution.maxValue;
      var newValue = lastSubValue + lastItem.value;
      if(newValue >= lastValue){
        var _lastSubSet = lastSubSolution.subset.slice();
        _lastSubSet.push(lastItem);
        return {maxValue: newValue, subset:_lastSubSet};
      }else{
        return lastSolution;
      }
    }
}