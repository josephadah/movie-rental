import React from 'react';
import Like from './common/like';
import { Link } from 'react-router-dom';

const MoviesTable = (props) => {
    const {pagedMovies, onLike, onDeleteMovie} = props;
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { 
                    pagedMovies.map(movie =>
                        <tr key={movie._id}>
                            <td>
                                <Link to={"/movies/" + movie._id}>{movie.title}</Link>
                            </td>
                            <td>{ movie.genre.name}</td>
                            <td>{ movie.stock}</td>
                            <td>{ movie.rate}</td>
                            <td><Like isLiked={movie.isLiked} onLike={() => onLike(movie)}/></td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDeleteMovie(movie._id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
     );
}
 
export default MoviesTable;