import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import VideoShow from '../components/VideoShow'
import VideoIndex from '../components/VideoIndex'

export default class YouTubeContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      videoResults: [],
      shownVideo: '',
      videoShow: false
    }
    this.fetchYouTube = this.fetchYouTube.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  fetchYouTube(e){
    this.setState(
      {
        searchTerm: e.target.value
      },
      this.apiCall
    )
  }

  apiCall(){
    const API_KEY = 'AIzaSyCUVIg4sQA5eg8huCRYVHJQSfwElOwenoo'
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${this.state.searchTerm}&type=video`

    var whatIsThis = fetch(URL)
    .then(response => response.json())
    .then(youTubeData => this.setState(
      {
        videoResults: youTubeData.items,
        shownVideo: youTubeData.items[0].id.videoId
      }
    )
  )
  }

  handleClick(videoId){
    this.setState({
      shownVideo: videoId,
      videoShow: true
    })
  }

  render(){
    return(
      <div className="YouTubeContainer">
        <SearchForm handleChange={this.fetchYouTube} />
        {this.state.videoShow &&
          <VideoShow video={this.state.shownVideo} />
        }
        <VideoIndex videoResults={this.state.videoResults} selectThumbnail={this.handleClick} />
      </div>
    )
  }
}
