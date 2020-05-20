import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component {
  static propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
    const { poster, title, year } = this.props
    return (
      <div className='movie-item'>
        <img src={poster} alt={title} className="movie-img"/>
        <div className="movie-content">
          <h3 className="movie-content-title">{title}</h3>
          <p className="movie-content-year">{year}</p>
        </div>
      </div>
    )
  }
}
