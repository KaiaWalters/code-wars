/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0 
    let right = 1
    let left = 0 

    while(right < prices.length) {
        let projectedProfit = prices[right] - prices[left]

        if(projectedProfit > profit) {
            profit = projectedProfit
        }

        if(prices[right] < prices[left]) {
            left = right
        }

        right ++

        console.log("left", prices[left], "right", prices[right], "profit", profit)
    }
    
    return profit

};