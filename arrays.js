var invites = ['Matt', 'Susan', 'Jessica', 'John']//MOST USED.  LEAST AMOUNT OF TYPING

var tasks = new Array(3)
tasks[0] = 'Buy food'
tasks[1] = 'Feed pets'
tasks[2] = 'Cook food'

var inbox = new Array('Water Bill', 'Pay Check','Greeting Card')

inbox[3] = 'You have rich uncle that wants to give you money.'

tasks.push('Do homework')//adds to end of array
tasks.pop()//Removes last item of array
tasks.unshift('Watch Netflix')//adds to the beginning of the array
tasks.shift()//removes the first array item completely ([1] becomes [0])
var thingIGotRidOf = tasks.shift()//Returns the value of the item removed from array
tasks[0] = 'Watch Hulu'//You can replace [x] with another value
// console.log(tasks)

var payCheck = inbox.slice(1,3)//returns chunks of an array
// console.log(payCheck)

inbox.splice(1, 0, 'You Are Hired', 'Job Offer')//where to start, how many to remove, what to put in.  Note --- Splice actually modifies the array, not just a temporary thing.

// delete inbox[0]//a way to remove a particular piece of an array.  array value [0] remains, but it is empty.  Leaves a gap.  Can also be used to to delete an entire array (like 'inbox')
// console.log(inbox)

inbox[inbox.length]= 'Invite to Spotify'//does the exact same thing as inbox.push('Invite to Spotify')
// console.log(inbox.length)//.length always starts counting at 1.  ([0]=1, [1]=2, etc. )

var hasJobOffer = inbox.includes('Job Offer')//Exact match, case sensitive
// console.log(hasJobOffer)

var jobOfferIndex = inbox.indexOf('Job Offer')//returns index number of value 'Job Offer'
var jobOfferIndex = inbox.indexOf('Job Salary')//returns (-1) because it cannot find 'Job Salary' (it doesn't exist)
//CAN MODIFY THIS, SEE BELOW*****************
// if (inbox.indexOf("Job Salary")=== -1){
//   console.log("no salary yet.")
// }
// else{
//   console.log('it is finally here')
// }

// console.log(jobOfferIndex)

// console.log(inbox)

// var matches = inbox.find(function(item){//'function' here is an Anonymous Function
//   return item.includes('Job')//How to find a specific string of text in an array
// })
//returns the first match in the form of a string
inbox.push('Job Salary')

function checkForJob(item){
  return item.includes('Job')
}

var matches = inbox.filter(checkForJob)
//console.log(matches)

for(var i = 0; i < inbox.length; i++){//How to spit out array values in order
  //console.log(i + '. ' + inbox[i])
}

for(var i = inbox.length; i >= 0; i--){//How to spit out array values in reverse
  //console.log(i + '. ' + inbox[i])
}
var matches = []
for (var i=0; i< inbox.length; i++){
  var hasJob = checkForJob(inbox[i])
  if (hasJob){
    matches.push(inbox[i])
  }

}
  //console.log(matches)

  //console.log(inbox.reverse())//reverses the array order

var fruit = ['apple', 'banana', 'cherry','watermelon']

fruit.forEach(function(item) {
  //console.log(item.toUpperCase())
})

//map transforms an array of items, one item at a time
//output of '.map' needs to be assigned to a variable
fruit = fruit.map(function(item, i){
  if (i === 2){
    return `<section>${item.toUpperCase()}</section`
  }
  else{
    return `<div>${i} - ${item}</div>`
  }
})

//console.log(fruit)

var prices = [
  {price: 7.98},
  {price: 14.99},
  {price: 2.30},
  {price: 12.80}
]

var total = prices.reduce(function(previous, current){
  return {price: previous.price + current.price}//'return' value is placed back into 'previous' above, and rerun.
}, {price: 0})//0 = the first value for 'previous'.

var avgPrice = total.price / prices.length

console.log(avgPrice)
