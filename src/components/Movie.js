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

    // return (
    //   <div className="card">
    //     <div className="card-image">
    //       <figure className="image">
    //         <img
    //         src={poster}
    //         alt={title}/>
    //       </figure>
    //     </div>
    //     <div className="card-content">
    //       <div className="media">
    //         <div className="media-content">
    //           <p className="title is-4">{title}</p>
    //           <p className="subtitle is-6">{year}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
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
