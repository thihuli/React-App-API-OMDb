import React, { Component } from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './style.css'



export default class Main extends Component {
    state = {
        movies: {}
    }


    componentDidMount() {
        this.loadMovies()
    }


    loadMovies = async () => {
        const response = await api.get()

        this.setState({movies: response.data})

    }

    getMovies(filme){
        return filme.api

    }




    render() {
        return ( 
                
                <div className='movie-list'>   

                    <article>

                        <strong>{this.state.movies.Title}</strong>
                        <br></br>
                        <img src={this.state.movies.Poster} alt='poster'></img>
                        <p>{this.state.movies.Plot}</p>
                        

                        <Link to='/details'>Detalhes</Link>
                    </article>                
            </div>
        )
    }
}