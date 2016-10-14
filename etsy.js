//1.
var total = items.reduce(function(previous, current){
  return {price: previous.price + current.price}
}, {price: 0})

var avgPrice = total.price / items.length
var avgPriceRounded = Math.round(avgPrice *100)/100

console.log('The average price is $' + avgPriceRounded)

//Initially tried .eachOf for this question, but after reviewing class notes saw that we could use .reduce. Thought we couldn't use .reduce with numbers but it worked.  Hooray.

//2.
var x = items.filter(function(items){
  if(items.price >= 14.00 && items.price <= 18.00){
    return {items}
  }
})
console.log('Items that cost between $14.00 USD and $18.00 USD:')
console.log(x)
//Was super lost on this until I tried putting in the {} for the return.  Knew .filter() was the way to go here, just took a bit to arrive at the correct result.

//3.
var findGBP = items.filter(function(items){
  if(items.currency_code === "GBP"){
    console.log(items.title + ' costs £' + items.price)
  }
})
//Similar solution as last one.  .filter() works well to find specific items.

//4.
function materialSearch(wood){
  if(wood.materials.includes('wood')){
    console.log(wood.title + ' is made of wood.')
  }
}
var findWood = items.filter(materialSearch)
//was concerned "materials": being displayed as array values in items.js would mess up their ability to be accessed, but apparently .includes() will search text of array values.  No problemo.

//5.
var materialCount = items.filter(function(items){
  if(items.materials.length >= 8){
    console.log(items.title + ' has ' + items.materials.length + ' materials: ' + items.materials.join('\n'))
  }
})

//6.
var didTheyMakeIt = items.filter(function(items){
  return items.who_made.includes('i_did')
})
console.log(didTheyMakeIt.length + ' were made by their sellers')
//Had the answer sitting in front of me for hours and didn't realize it... getting results as ENTIRE OBJECTS means they are in an array, which means they can be counted via .length()!!  Face plant on laptop.
