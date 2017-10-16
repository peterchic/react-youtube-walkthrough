import React from 'react'
import Image from './Image'

export default (props) => {

  let thumbnails = props.videoResults.map((video)=>{
    let videoId = video.id.videoId
    let snippet = video.snippet
    return(
      <li key={videoId} className="list-group-item d-flex text-left">
        <Image
          selectThumbnail={props.selectThumbnail}
          videoId={videoId}
          snippet={snippet}
        />
        <br/>
        {snippet.title}
      </li>
    )
  })

  return(
    <div>
      <ul className="list-group">
        {thumbnails}
      </ul>
    </div>
  )
}
