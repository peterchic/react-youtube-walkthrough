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
      searchTerm: e
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
    return(
      <div>
        <div className="container">
          <div className="content-wrapper">
            <div className="row">
              <SearchBar handleChange={this.searchInput}/>
              <div className='col-lg-9'>
                {this.state.videoShow && <VideoShow video={this.state.shownVideo} videoResults={this.state.videos}/>}
              </div>
              <div className="col-sm-3">
                <VideoIndex videoResults={this.state.videos} selectThumbnail={this.handleClick}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
