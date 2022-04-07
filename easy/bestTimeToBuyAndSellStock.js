/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let maxP = 0
    
    for (let price of prices){
        if (price < min){
            min = price
        } else if (price - min > maxP) {
            maxP = price-min
        }
    }
    return maxP
};
