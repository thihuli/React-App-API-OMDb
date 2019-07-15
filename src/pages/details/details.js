import React, {Component} from 'react'
import api from '../../services/api'
import './style.css'

export default class details extends Component {
    state = {
        detalhes: {}
    }

    async componentDidMount() {
        const response = await api.get(this.state.detalhes.data)

        this.setState({detalhes: response.data})
    }
    
    render() {

        

        const {detalhes} = this.state

        return (
            <div className='detalhes'>
                <h1>{detalhes.Title} </h1>
                <p>Ano de lançamento:  {detalhes.Year} </p>
                <p>Data de lançamento: {detalhes.Released} </p>
                <p>Atores:  {detalhes.Actors} </p>
                <p>Escritor: {detalhes.Writer} </p>
                <p>Lingua: {detalhes.Language} </p>
                <p>Bilheteria: {detalhes.BoxOffice} </p>
                <p>Genêro: {detalhes.Genre} </p>
                <p>Duração: {detalhes.Runtime} </p>
                <p>Indicação: {detalhes.Rated} </p>
                <p>Produção: {detalhes.Production} </p>
                <p>Lançamento em DVD: {detalhes.DVD} </p>
                <p>Premiação: {detalhes.Awards} </p>
                <p>Site: {detalhes.Website} </p>
                



            </div>
        )
    }

}


