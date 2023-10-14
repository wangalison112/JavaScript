let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    //document.getElementById("a1").innerHTML = "A new movie is added";
    console.log("A new movie is added");
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    //document.getElementById("p1").innerHTML = "Printing all movies....";
    console.log("Printing all movies....");
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        //document.getElementById("p2").innerHTML = allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched:" + allMovies[i].haveWatched;
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched:" + allMovies[i].haveWatched);
        count++;
    }
    //document.getElementById("p3").innerHTML = "\nYou have " + count + " movies in total";
    console.log("\nYou have " + count + " movies in total");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than " + rating);
    let numMatches = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if(allMovies[i].rating > rating) {
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            numMatches++;
        }
    }
    console.log("\nIn total, there are " + numMatches + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    title.haveWatched = !title.haveWatched;
}


// ////////////////////////////////////////////////////////////
// //SHOW ON WEBSITE
// let a = new Movie("Spiderman", 3, true);
// let b = new Movie("Citizen Kane", 4, false);
// let c = new Movie("Zootopia", 4.5, true);

// allMovies.push(x,y,z);

// /*replace console.log with display on web page*/
// document.getElementById("1").innerHTML = "----------------";
// document.getElementById("2").innerHTML = "running program......";
// document.getElementById("3").innerHTML = "----------------";
// printMovies();


// let movie4 = new Movie("Parasite", 2, false);

// /*replace console.log with display on web page*/
// document.getElementById("4").innerHTML = "----------------";
// addMovie(movie1);
// document.getElementById("5").innerHTML = "----------------";



// changeWatched("Spiderman");
// /*replace console.log with display on web page*/
// document.getElementById("6").innerHTML = "----------------";

// printMovies();

// /*replace console.log with display on web page*/
// document.getElementById("7").innerHTML = "----------------";

// changeWatched("Spiderman");
// /*replace console.log with display on web page*/
// document.getElementById("8").innerHTML = "----------------";

// printMovies();
// /*replace console.log with display on web page*/
// document.getElementById("9").innerHTML = "----------------";

// highRatings(3.5);

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);