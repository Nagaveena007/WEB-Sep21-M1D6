/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/
console.log("EXERCISE A: \n")

let test ="veena"
console.log(test)

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
console.log("EXERCISE B: \n")

//function sumOfNumbers(){
let sum=0
for(let i=10;i<=20;i++){
sum+=i
}
console.log(sum)
//}
//console.log(sumOfNumbers)

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20
     (it should be randomly created at each execution).
*/
console.log("EXERCISE C: \n")
let random;
random=Math.floor(Math.random()*20)
console.log(random)
/* EXERCISE D
    Create a variable called me and assign to it an object containing the following 
    information: name = your name, surname = your surname, age = your age.
*/
console.log("EXERCISE D: \n")
let me= {
    name:"veena",
    surname:"Hallikeri",
    age:26
}
console.log(me)
/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
console.log("EXERCISE E: \n")
delete me.age
console.log(me)
/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined
    before an array called skills, containing the programming languages you know right now.
*/
console.log("EXERCISE F: \n")

me.skills=["JavaScript","HTML","CSS","C"]
console.log(me)
/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
console.log("EXERCISE G: \n")

me.skills.pop()
console.log(me)
// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
 
console.log("EXERCISE 1: \n")

function dice(min,max){
return Math.floor(Math.random()*(max-min+1)+min)   
}
let randomNumberOnDice=dice(1,6)
console.log(randomNumberOnDice)
 
/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
console.log("EXERCISE 2: \n")
const whoIsBigger=(a,b)=>a>b?a:b
console.log(whoIsBigger(12,6))
/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter 
    and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log("EXERCISE 3: \n")
const splitMe=(str)=> str.split('')
console.log(splitMe("myname"))

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter,
     otherwise it should remove the last one from it.
*/
console.log("EXERCISE 4: \n")
const deleteOne=(str1,bool)=>bool===true?str1.slice(1):str1.slice(0,str1.length-1)
console.log(deleteOne("veena",false))
/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and 
   returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
console.log("EXERCISE 5: \n")
function onlyLetters(str2){
    //return str2.match(/\D/g).join('')
     return str2.replace(/[0-9]/g, '')
}
console.log(onlyLetters("veena123hallikeri"))
/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and 
   returns true if the string is a valid email address.
*/
console.log("EXERCISE 6: \n")
 function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  } 
  console.log(validateEmail("veenahallikerigmail.com")) 
/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/
console.log("EXERCISE 7: \n")
function whatDayIsIt(){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var day = days[ now.getDay() ];
var month = months[ now.getMonth() ];
}
console.log(whatDayIsIt)

/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log("EXERCISE 8: \n")
function rollTheDices(num){
dice(3)


}
/* EXERCISE 9
   Write a function called howManyDays which receives a date as
    a parameter and returns the number of days passed since that date.
*/
console.log("EXERCISE 9: \n")
/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return
    true if today's your birthday, false otherwise.
*/
console.log("EXERCISE 10: \n")

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/
console.log("EXERCISE 11: \n")
function deleteProp (obj,str3){


}

// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
console.log("EXERCISE 21: \n")

function halfTree(r){
    let pattern1=""
for(let i1=1;i1<=r;i1++){
for(let j1=1;j1<i1;j1++){
    pattern1+="*"
}
pattern1 += "\n";
}
console.log(pattern1);
}
halfTree(5)
/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" 
  tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
console.log("EXERCISE 22: \n")
 function tree(n){
    let pattern = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n - i; j++) {
        pattern += " ";// prints spaces
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        pattern += "*";       // prints star
      }
      pattern += "\n";
    }
    console.log(pattern);

}
tree(4) 


/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a 
  parameter and returns true if the given number is a prime number.
*/
console.log("EXERCISE 23: \n")
function isItPrime(p){
for(let i=0;i<=p/2;i++){
    if( p%i === 0){
        return false
    }
    else{
    console.log("given number",p +" is a prime number")
    return true
}
}
}
isItPrime(10)

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; 
 then post the link of your commit on the Homework section of today's Eduflow.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
let movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
console.log("EXERCISE 12: \n")
function oldestMovie(){
    let years =[]
    for(let x1=0;x1<=movies.length-1;x1++){
        years.push(`${movies[x1].Year}`)
        //console.log(years[x])
        }
        years.sort()
        //console.log(years)
        console.log(years[0])
}
oldestMovie()
/* EXERCISE 13
    Write a function called countMovies which returns the number of movies 
    contained in the provided movies array.
*/
console.log("EXERCISE 13: \n")
function countMovies(){
    let count=movies.length
    console.log(count)
}
countMovies()
/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with
     just the titles of the movies contained in the provided movies array.
*/
console.log("EXERCISE 14: \n")
function onlyTheTitles(){
    let movieTitles =[]
    for(let x=0;x<=movies.length-1;x++){
    movieTitles.push(`${movies[x].Title}`)
    console.log(movieTitles[x])
    }
return movieTitles
}
onlyTheTitles()



/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only 
   the movies produced in this millennium from the provided movies array.
*/
console.log("EXERCISE 15: \n")
function onlyInThisMillennium(){
   // oldestMovie(years.sort())
let millennium=[]
for(let q1=0;q1<movies.length-1;q1++){
 if(movies.year >2000){
        millennium.push(year[q1])
    }
    
}
    for(let q=0;q<=millennium.length-1;q++){
console.log(millennium[q])
    }
}
onlyInThisMillennium()
/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a 
    parameter and returns the movie with the given id from the provided movies array.
*/
console.log("EXERCISE 16: \n")
function getMovieById(imdbID){
    console.log(`${movies.imdbID}`)
}
getMovieById(tt0399295)
/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of
     all the years in which the movies in the provided movies array have been produced.
*/
console.log("EXERCISE 17: \n")
function sumAllTheYears(){
     sum=[]
    for(let y=0;y<=movies.length-1;y++){
         sum+=(`${movies[y].Year}`)
    }
    console.log(sum)
}
sumAllTheYears()

/* EXERCISE 18
    Write a function called searchByTitle which receives a 
    string as a parameter and returns all the movies in the provided 
    movies array which contain that string in the title.
*/
console.log("EXERCISE 18: \n")
/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from 
    the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/
console.log("EXERCISE 19: \n")
/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a 
   parameter and returns the provided movies array without the element in the given position.
*/
console.log("EXERCISE 20: \n")
function removeIndex(index){
let remainingMovies=movies.splice(index,1)
console.log(movies)
console.log(remainingMovies)
return 
}
removeIndex(3)






