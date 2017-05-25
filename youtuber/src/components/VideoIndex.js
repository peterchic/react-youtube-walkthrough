import React from 'react'
import Image from './Image'

export default (props) => {

  let thumbnails = props.videoResults.map((video)=>{
    let videoId = video.id.videoId
    let snippet = video.snippet
    return(
      <li>
        <Image
          selectThumbnail={props.selectThumbnail}
          videoId={videoId}
          snippet={snippet}
        />
        {snippet.title}
      </li>
    )
  })

  return(
    <div>
      <ul>
        {thumbnails}
      </ul>
    </div>
  )
}
