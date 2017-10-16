import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import VideoShow from '../components/VideoShow'
import VideoIndex from '../components/VideoIndex'


export default class YouTubeContainer extends Component{
  constructor(){
    super()
    this.state={
      videos: [],
      searchTerm: '',
      shownVideo: '',
      videoShow:false
    }

    this.searchInput = this.searchInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  searchInput(e){
    this.setState({
      searchTerm: e.target.value
    },this.apiCall )
  }

  apiCall(){
    const API_KEY = 'AIzaSyCUVIg4sQA5eg8huCRYVHJQSfwElOwenoo'
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${this.state.searchTerm}&type=video`

    fetch(URL)
      .then(res => res.json())
      .then(YTdata => this.setState({
        videos: YTdata.items,
        shownVideo: YTdata.items[0].id.videoId
      })
    )
  }

  handleClick(videoId){
    this.setState({
      shownVideo: videoId,
      videoShow: true
    })
  }

  render(){
    console.log(this.state.searchTerm);
    return(
      <div>
        <SearchBar handleChange={this.searchInput}/>
        {this.state.videoShow && <VideoShow video={this.state.shownVideo}/>}
        <VideoIndex videoResults={this.state.videos} selectThumbnail={this.handleClick}/>
      </div>
    )
  }
}
