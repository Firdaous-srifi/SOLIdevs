class Movie {
    constructor(Title,Description,release_date,Rating) {
        this.Title = Title;
        this.description = Description;
        this.Date = release_date;
        this.Rating = Rating;
    }
    Details() {
        return `
            <td>${this.Title}</td>
            <td>${this.description}</td>
            <td>${this.Date}</td>
            <td>${this.Rating}</td>`;
    }
}


const movie1 = new Movie('Joker', 'a man who is mentally ill af', 2001, 8);
const movie2 = new Movie('Avatar', 'overrated movie', 2018, 8);
const movie3 = new Movie('Jurassic Park', '', 2001, 8);
const movie4 = new Movie('Barbie', '', 2001, 8);
const movie5 = new Movie('Se7en', '', 2001, 8);
const movie6 = new Movie('Interstellar', '', 2001, 8);
const movie7 = new Movie('Inception', '', 2001, 8);
const movie8 = new Movie('The Shawshank Redemption', '', 2001, 8);
const movie9 = new Movie('Godfather', '', 2001, 8);
const movie10 = new Movie('Ice Age', '', 2001, 8);

// Store the movies
const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];


function generateTable() {
    let table = '<table>';

    // th
    table += '<tr>   <th>Title</th>   <th>Description</th>   <th>Release Date</th>   <th>Rating</th>   </tr>';

    // Loop through the movies array to create table rows 
    for (let i = 0; i < movies.length; i++) {
        table += '<tr>';
        table += movies[i].Details();  //Details method of each movie
        table += '</tr>';
    }

    table += '</table>';

    // Insert table into HTML
    document.getElementById('movieTable').innerHTML = table;
}

generateTable();
