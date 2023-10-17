let allMovies = [];

function display(text) {
    document.getElementById("result").innerHTML += text;
}

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
    display("A new movie is added<br>");
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    //document.getElementById("p1").innerHTML = "Printing all movies....";
    display("Printing all movies....<br>");
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        //document.getElementById("p2").innerHTML = allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched:" + allMovies[i].haveWatched;
        display(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched + "<br>");
        count++;
    }
    //document.getElementById("p3").innerHTML = "\nYou have " + count + " movies in total";
    display("<br>You have " + count + " movies in total<br>");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    display("printing movie that has a rating higher than " + rating + "<br>");
    let numMatches = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if(allMovies[i].rating > rating) {
            display(allMovies[i].title + " has a rating of " + allMovies[i].rating + "<br>");
            numMatches++;
        }
    }
    display("<br>In total, there are " + numMatches + " matches<br>");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    display("changing the status of the movie...<br>");
    title.haveWatched = !title.haveWatched;
}


////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
display("----------------<br>");
display("running program......<br>");
display("----------------<br>");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
display("----------------<br>");
addMovie(movie1);
display("----------------<br>");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
display("----------------<br>");

printMovies();

/*replace console.log with display on web page*/
display("----------------<br>");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
display("----------------<br>");

printMovies();
/*replace console.log with display on web page*/
display("----------------<br>");

highRatings(3.5);