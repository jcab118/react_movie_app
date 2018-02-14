import React, {Component} from 'react';

import omdb_api from './../api/omdb_api';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined
    };
  }
  searchMovies() {
    if(this.refs.movieSearcher.value.length > 3) {
      omdb_api(this.refs.movieSearcher.value.split(" ").join("+").toLowerCase()).then((res) => {
        console.log(res)
        this.setState({
          title: res.data
        })
      });
    }
  }

  render() {
      console.log(this.state.title)
      const displayMovieSearch = () => {
        if(this.state.title) {
          return (
            <div className="movie-search-movie">
              {/* wrap this img tag in an atag...add the according redirect target: blank... */}
              {/* remember to add https:// to the url or the link will not redirect */}
              <div className="movie-poster-div">
                <a href={"https://www.imdb.com/title/" + this.state.title.imdbID} target="_blank"><img className="movie-poster" align="center" src={this.state.title.Poster}/><p className="imdb-page-link-tag" align="center">{this.state.title.Title}</p></a>
              </div>
              <div className="movie-search-info">
                <div className="movie-title"><span>Title: </span><span style={{color: "slategray"}}>{this.state.title.Title}</span></div>
                <div className="movie-year"><span>Year: </span><span style={{color: "slategray"}}>{this.state.title.Year}</span></div>
                <div className="movie-plot"><span>Plot: </span><span style={{color: "slategray"}}>{this.state.title.Plot}</span></div>
                <div className="movie-director"><span>Director: </span><span style={{color: "slategray"}}>{this.state.title.Director}</span></div>
                <div className="movie-actors"><span>Actors: </span><span style={{color: "slategray"}}>{this.state.title.Actors}</span></div>
                <div className="movie-genre"><span>Genre: </span><span style={{color: "slategray"}}>{this.state.title.Genre}</span></div>
                <div className="movie-awards"><span>Awards: </span><span style={{color: "slategray"}}>{this.state.title.Awards}</span></div>
                <div className="movie-budget"><span>Box Office: </span><span style={{color: "slategray"}}>{this.state.title.BoxOffice}</span></div>
                <div className="movie-rated"><span>Rated: </span><span style={{color: "slategray"}}>{this.state.title.Rated}</span></div>
              </div>
            </div>
          )
        }
      }
      return (
        <div>
          <h3 className="movie-header">React Movie Searcher</h3>
          <form>
            <input
               className="movie-input"
               type="text"
               ref="movieSearcher"
               placeholder="Type A Movie Title Here"
               onChange={this.searchMovies.bind(this)}
            />
          </form>
          <br></br>
          {displayMovieSearch()}
        </div>
      )
   }
}