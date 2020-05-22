import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = 'aad7daff'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie( { id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log({ movie })
        this.setState({ movie })
      })
  }

  _goBack() {
    window.history.back()
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this._fetchMovie({ id })
  }

  render() {
    const { Title, Poster, Actors, Director, Year, Metascore, imdbRating, Plot } =
    this.state.movie

    return (
      <div>
        <ButtonBackToHome/>
        <h1><b>{Title}</b></h1>
        {Poster !== 'N/A' ? <img src={Poster} alt={Poster} /> : ''}
        {Director !== 'N/A' ? <h2><b>Director:</b> {Director} </h2> : ''}
        <h3><b>Actors:</b> {Actors}</h3>
        <span><b>Year:</b> {Year} </span><br/>
        {Metascore !== 'N/A' ? <p><b>Metascore:</b> {Metascore}/100 </p> : ''}
        {imdbRating !== 'N/A' ? <p><b>Imdb Rating:</b> {imdbRating}/10 </p> : ''}
        {Plot !== 'N/A' ? <p><b>Plot: </b>{Plot}</p> : ''}
      </div>
    )
  }
}
