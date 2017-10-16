import React from 'react'

export default (props) => {
  return(
    <img
      onClick={()=>props.selectThumbnail(props.videoId)} src={props.snippet.thumbnails.default.url}
      value={props.videoId}
      alt= {props.videoId}
    />
  )
}
