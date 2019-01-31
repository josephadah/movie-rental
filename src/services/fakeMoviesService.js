
const movies = [
    { 
        _id: 1,
        title: "Terminator",
        genre: { _id: 1, name: "Action"},
        stock: 4,
        rate: 3.0,
        isLiked: false 
    },
    { 
        _id: 2,
        title: "Titanic",
        genre: { _id: 2, name: "Romance"},
        stock: 24,
        rate: 4.0,
        isLiked: true 
    },
    { 
        _id: 3,
        title: "Thor",
        genre: { _id: 3, name: "Sci Fi"},
        stock: 70,
        rate: 3.5,
        isLiked: false 
    },
    { 
        _id: 4,
        title: "Fire Proof",
        genre: { _id: 4, name: "Christian"},
        stock: 20,
        rate: 4.5,
        isLiked: true 
    },
    { 
        _id: 5,
        title: "Rambo",
        genre: { _id: 1, name: "Action"},
        stock: 1,
        rate: 3.5,
        isLiked: false 
    },
    { 
        _id: 6,
        title: "A United Kingdom",
        genre: { _id: 2, name: "Romance"},
        stock: 30,
        rate: 4.0,
        isLiked: true 
    },
    { 
        _id: 7,
        title: "Rangers",
        genre: { _id: 3, name: "Sci Fi"},
        stock: 90,
        rate: 1.5,
        isLiked: false 
    },
    { 
        _id: 8,
        title: "God is NOT Dead",
        genre: { _id: 4, name: "Christian"},
        stock: 2,
        rate: 5.0,
        isLiked: true 
    },
    { 
        _id: 9,
        title: "Love Comes Softly",
        genre: { _id: 4, name: "Christian"},
        stock: 34,
        rate: 5.0,
        isLiked: false 
    },
    { 
        _id: 10,
        title: "Races",
        genre: { _id: 2, name: "Romance"},
        stock: 89,
        rate: 4.0,
        isLiked: true 
    }
];

const genres = [
    {_id: 1, name: "Action"},
    {_id: 2, name: "Romance"},
    {_id: 3, name: "Sci Fi"},
    {_id: 4, name: "Christian"},
];

export function getMovies() {
    return movies;
}

export function getGenres() {
    return genres;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}