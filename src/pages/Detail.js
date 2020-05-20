import React, { Component } from 'react'
import PropTypes from 'prop-types'

const API_KEY = 'aad7daff'

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string
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
    const { id } = this.props
    this._fetchMovie({ id })
  }

  render() {
    const { Title, Poster, Actors, Director, Year, Metascore, imdbRating, Plot } =
    this.state.movie

    return (
      <div>
        <button onClick={this._goBack}>Return</button>
        <h1><b>{Title}</b></h1>
        <img src={Poster} alt={Poster} />
        <h2><b>Director:</b> {Director} </h2>
        <h3><b>Actors:</b> {Actors}</h3>
        <span><b>Year:</b> {Year} </span><br/>
        <span><b>Metascore:</b> {Metascore}/100 </span><br/>
        <span><b>Imdb Rating:</b> {imdbRating}/10 </span>
        <p><b>Plot: </b>{Plot}</p>
      </div>
    )
  }
}
