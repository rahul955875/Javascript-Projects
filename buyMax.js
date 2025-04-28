const prices = [20, 10, 5, 30, 15];
const money = 6;
const sorted = [30,20,15,15,5] 
const thingsYouBuy = (money,prices)=>{
 prices.sort((a,b)=> b - a)
let totalItem = 0
for(let price of prices){
    if(money<1) break
    let count= Math.round(money/price)
    totalItem +=count
    money -= count * price
}
return totalItem


}
