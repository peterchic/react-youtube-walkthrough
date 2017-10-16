import React from 'react'

export default (props) => {
  const match = props.videoResults.map( video => {
    if(video.id.videoId === props.video){
      return (
        <div className="page-header">
            <div className="text-left">
            <h1>{video.snippet.title}</h1>
            <p>{video.snippet.description}</p>
            <div className="clear-fix"></div>
        </div>
      </div>
      )
    }
  })

  return(
    <div>
      <iframe title={props.video} id='iFrame' allowFullScreen="allowfullscreen" width="100%" src={`https://www.youtube.com/embed/${props.video}`}/>
      {match}
    </div>
  )
}
