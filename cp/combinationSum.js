function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(remaining, currentCombination, startIndex) {
        if (remaining === 0) {
            result.push([...currentCombination]);
            return;
        }
        if (remaining < 0) {
            return;
        }
        
        for (let i = startIndex; i < candidates.length; i++) {
            currentCombination.push(candidates[i]);
            backtrack(remaining - candidates[i], currentCombination, i);
            currentCombination.pop();
        }
    }
    
    candidates.sort((a, b) => a - b);
    backtrack(target, [], 0);
    
    return result;
}