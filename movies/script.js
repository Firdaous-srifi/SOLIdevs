
class Movie {
    constructor(Title,Description,release_date, Rating){
        this.Title = Title;
        this.description = Description;
        this.Date = release_date;
        this.Rating = Rating;
    }
    Details(){
        return`
                <td>${this.Title}</td>
                <td>${this.description}</td>
                <td>${this.Publication_date}</td>
                <td>${this.Rating}</td>`;
    }
}



const movie1 = new Movie ('Joker','',2001,8);
const movie2 = new Movie ('Avatar','',2018,8);
const movie3 = new Movie ('Jurassic Park','',2001,8);
const movie4 = new Movie ('Barbie','',2001,8);
const movie5 = new Movie ('Se7en','',2001,8);
const movie6 = new Movie ('Interstellar','',2001,8);
const movie7 = new Movie ('Inception','',2001,8);
const movie8 = new Movie ('The shawshank redemption','',2001,8);
const movie9 = new Movie ('Godfather','',2001,8);
const movie10 = new Movie ('Ice age','',2001,8);

console.log(movie1);