import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import LoadingIndicator from '../components/LoadingIndicator';
import {get} from '../plugins/api'
import { connect } from "react-redux";

const Detail = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)

    const fetchMovie = (movieId) => {
        get(movieId).then((res) => {
            setMovie(res.data)
        })
    }
    useEffect(() => {
        fetchMovie(movieId)
    }, [movieId]);

    return (
        <div className="content-container">
            {
                (movie) ? 
                    <div style={{padding:5}}>
                        <Link to="/" style={{display:'block', marginBottom:10}}> Kembali ke pencarian</Link>
                        <img src={movie.Poster} style={{width:'200px'}} alt="movie-poster"/>

                        <table className="table-collapse" style={{width:'100%'}}>
                            <tbody>
                                <tr>
                                    <th style={{width:'25%'}}>Title</th>
                                    <td style={{width:'75%'}}> {movie.Title}</td>
                                </tr>
                                <tr>
                                    <th>Year</th>
                                    <td> {movie.Year}</td>
                                </tr>
                                <tr>
                                    <th>Director</th>
                                    <td> {movie.Director}</td>
                                </tr>
                                <tr>
                                    <th>Writer</th>
                                    <td> {movie.Writer}</td>
                                </tr>
                                <tr>
                                    <th>Actors</th>
                                    <td> {movie.Actors}</td>
                                </tr>
                                <tr>
                                    <th>Rated</th>
                                    <td> {movie.Rated}</td>
                                </tr>
                                <tr>
                                    <th>Ratings</th>
                                    <td> {movie.Ratings.map((el, key) =>(
                                        <span key={key} style={{display:'block'}}>{el.Source} : {el.Value}</span>
                                    ))}</td>
                                </tr>
                                <tr>
                                    <th>Released</th>
                                    <td> {movie.Released}</td>
                                </tr>
                                <tr>
                                    <th>Runtime</th>
                                    <td> {movie.Runtime}</td>
                                </tr>
                                <tr>
                                    <th>Genre</th>
                                    <td> {movie.Genre}</td>
                                </tr>
                                <tr>
                                    <th>Plot</th>
                                    <td> {movie.Plot}</td>
                                </tr>
                                <tr>
                                    <th>Language</th>
                                    <td> {movie.Language}</td>
                                </tr>
                                <tr>
                                    <th>Country</th>
                                    <td> {movie.Country}</td>
                                </tr>
                                <tr>
                                    <th>Awards</th>
                                    <td> {movie.Awards}</td>
                                </tr>
                                <tr>
                                    <th>Metascore</th>
                                    <td> {movie.Metascore}</td>
                                </tr>
                                <tr>
                                    <th>IMDB Ratings</th>
                                    <td> {movie.imdbRating}</td>
                                </tr>
                                <tr>
                                    <th>IMDB Vote</th>
                                    <td> {movie.imdbVotes}</td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td> {movie.Type}</td>
                                </tr>
                                <tr>
                                    <th>DVD</th>
                                    <td> {movie.DVD}</td>
                                </tr>
                                <tr>
                                    <th>Box Office</th>
                                    <td> {movie.Boxoffice}</td>
                                </tr>
                                <tr>
                                    <th>Production</th>
                                    <td> {movie.Production}</td>
                                </tr>
                                <tr>
                                    <th>Website</th>
                                    <td> {movie.Website}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                : 
                    <LoadingIndicator/>
            }
        </div>
    );
}

export default connect(
    null,
    { }
  )(Detail);
