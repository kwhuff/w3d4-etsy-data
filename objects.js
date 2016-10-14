var pizza = new Object()
pizza.meat = 'sausage'
pizza.cheese = 'cheddar'
pizza.veggie = 'black olives'

var pizza = {
  meat: 'sausage',
  cheese: 'cheddar',
  veggie: 'black olives'
}
pizza.meat = 'pep'


//console.log(pizza.meat)
var topping = 'cheese'
//console.log(pizza[topping])

var props = Object.keys(pizza)

props.forEach(function(prop){
  console.log(pizza[prop])//returns value of keys (sausage, cheddar, black olives)
})
// console.log(props)

var movies =[
  {title: 'Star Wars',
  genre: 'Sci Fi',
  year: 1977,
  directors: [
    {
    name: 'George Lucas'
  },
  {
    name: 'Jamie Foxx'
  }
]
},
  {title: 'Forrest Gump',
  genre: 'Drama',
  year: 1995,
  directors: [
    {
      name: 'Robert Zemeckis'
    }
  ]
}
]

movies.forEach(function(movie){

  var directors = movie.directors.map(function(director){
    return director.name
  })
  directors = directors.join(', ')
  //console.log(directors.join(', '))
  //console.log(movie.title + ' - ' + movie.genre + ' (' + movie.year + ')' + ' Directed by ' + directors) //movie.directors[0].name) if we only had one listed
})
