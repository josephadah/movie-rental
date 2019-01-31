import React, {Component} from 'react';
import {getMovie} from '../services/fakeMoviesService'

class MovieDetails extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        const {match} = this.props;
        this.setState({movie: getMovie(parseInt(match.params.id, 10))});
    }

    handleSave = () => {
        this.props.history.push("/movies");
    }

    render() { 
        return ( 
            <div className="m-3 p-3 text-left">
                <h3>Movie Details</h3>
                {this.renderMovieDetails()}

                <div>
                    <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
                </div>
            </div>
         );
    }

    renderMovieDetails() {
        const {movie} = this.state;

        if (movie) {
            return (
                <div>
                    <p>Title: {movie.title}</p>
                    {/* <p>Genre: {movie.genre.name}</p> */}
                    <p>Rating: {movie.rate}</p>
                    <p>Stock: {movie.stock}</p>
                </div>
            )
        }
    }
}
 
export default MovieDetails;