fetch('books/data.json').then(
    response => {
        if(!response.ok)
            console.log('peep peeep there is an error!');
        return response.json();
    }
)
.then(data=>{
    data.books.forEach(Book => {
        console.log(data);
        
    });
})