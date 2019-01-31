import React, { Component } from 'react';
import { getMovies, getGenres } from '../services/fakeMoviesService';
import Pagination from './common/pagination';
import {Paginate} from './utils/paginate';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedGenre: {_id: "", name: "All Movies"}
     };

     componentDidMount() {
        this.setState(
            { 
                movies: getMovies(),
                genres: [{_id: "", name: "All Movies"}, ...getGenres()]
            }
        );
     }

     handleDeleteMovie = id => {
         const movies = this.state.movies.filter(m => m._id !== id);
         this.setState({movies});
     }

     handleLike = movie => {
        let movies = [...this.state.movies];
        const index = movies.findIndex(x => x._id === movie._id);
        movies[index].isLiked = !movie.isLiked;
        this.setState({movies});
     }

     handlePageClick = page => {
         this.setState({currentPage: page});
     }

     handleFilterSelected = item => {
         this.setState({ selectedGenre: item });
     }

     filterItem(items, filter) {
         if (filter && filter._id) {
             return items.filter(m => m.genre._id === filter._id);
         }
         return items;
     }

    render() { 
        const { currentPage, pageSize, movies: totalMovies, genres, selectedGenre } = this.state;
        const filteredMovies = selectedGenre ? this.filterItem(totalMovies, selectedGenre) : totalMovies;
        const count = filteredMovies.length;
        const pagedMovies = Paginate(currentPage, filteredMovies, pageSize);

        return ( 
            <div>
                <p className="m-3 p-3">There are { count ? count : "No" } Movies in the database.</p>
                <div className="row">
                    <div className="col-3">
                        <ListGroup selectedGenre={selectedGenre} items={genres} onClick={this.handleFilterSelected}/>
                    </div>
                    <div className="col">
                        <MoviesTable pagedMovies={pagedMovies} onLike={this.handleLike} onDeleteMovie={this.handleDeleteMovie} />
                        
                        <Pagination
                            currentPage={currentPage}
                            totalItems={count}
                            pageSize={pageSize}
                            onClick={this.handlePageClick} 
                        />
                    </div>
                </div>
            </div>
        );
    }

}
 
export default Movies;