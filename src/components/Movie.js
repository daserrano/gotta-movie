import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  }

  render() {
    const { id, poster, title, year } = this.props

    return (
      <Link to={`/detail/${id}`} className='movie-item'>
        <img src={poster} alt={title} className="movie-img"/>
        <div className="movie-content">
          <h3 className="movie-content-title">{title}</h3>
          <p className="movie-content-year">{year}</p>
        </div>
      </Link>
    )
  }
}
