// DOM Elements
const booksSection = document.getElementById('books-section');
const wishlistSection = document.getElementById('wishlist-section');
const booksContainer = document.getElementById('books-container');
const wishlistContainer = document.getElementById('wishlist-container');
const showBooksBtn = document.getElementById('show-books');
const showWishlistBtn = document.getElementById('show-wishlist');
const searchInput = document.getElementById('search-input');
const wishlistCount = document.getElementById('wishlist-count');
const emptyWishlist = document.getElementById('empty-wishlist');
const browseBooks = document.getElementById('browse-books');
const toast = document.getElementById('toast');

// State
let books = [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Event Listeners
showBooksBtn.addEventListener('click', showBooks);
showWishlistBtn.addEventListener('click', showWishlist);
browseBooks.addEventListener('click', showBooks);
searchInput.addEventListener('input', handleSearch);

// Functions
function showBooks() {
    booksSection.classList.add('active');
    wishlistSection.classList.remove('active');
    showBooksBtn.classList.add('active');
    showWishlistBtn.classList.remove('active');
}

function showWishlist() {
    wishlistSection.classList.add('active');
    booksSection.classList.remove('active');
    showWishlistBtn.classList.add('active');
    showBooksBtn.classList.remove('active');
    renderWishlist();
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.fullname.toLowerCase().includes(searchTerm)
    );
    renderBooks(filteredBooks);
}

function createBookCard(book, isWishlist = false) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    const isInWishlist = wishlist.some(item => item.title === book.title);
    
    card.innerHTML = `
        <div class="book-image">
            <img src="${book.cover}" alt="${book.title}">
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author.fullname}</p>
            <p class="book-description">${book.description}</p>
            <div class="book-actions">
                <button class="wishlist-btn ${isWishlist ? 'remove' : 'add'}">
                    <i class="fas ${isWishlist ? 'fa-trash' : 'fa-heart'}"></i>
                    ${isWishlist ? 'Remove' : (isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist')}
                </button>
            </div>
        </div>
    `;

    const wishlistBtn = card.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', () => {
        if (isWishlist) {
            removeFromWishlist(book);
        } else {
            if (!isInWishlist) {
                addToWishlist(book);
            }
        }
    });

    return card;
}

function renderBooks(booksToRender = books) {
    booksContainer.innerHTML = '<h1>${books.title}</h1>';
    booksToRender.forEach(book => {
        booksContainer.appendChild(createBookCard(book));
    });
}

function renderWishlist() {
    wishlistContainer.innerHTML = '';
    if (wishlist.length === 0) {
        emptyWishlist.classList.remove('hidden');
    } else {
        emptyWishlist.classList.add('hidden');
        wishlist.forEach(book => {
            wishlistContainer.appendChild(createBookCard(book, true));
        });
    }
}

function addToWishlist(book) {
    if (!wishlist.some(item => item.title === book.title)) {
        wishlist.push(book);
        updateWishlistCount();
        saveWishlist();
        showToast('Added to wishlist');
        renderBooks();
    }
}

function removeFromWishlist(book) {
    wishlist = wishlist.filter(item => item.title !== book.title);
    updateWishlistCount();
    saveWishlist();
    showToast('Removed from wishlist');
    renderWishlist();
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize
function init() {
    // Fetch books data
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            books = data;
            renderBooks();
            updateWishlistCount();
        })
        .catch(error => {
            console.error('Error loading books:', error);
            showToast('Error loading books');
        });
}

init();