import React from 'react'

export default (props) => {
  return(
    <iframe src={`https://www.youtube.com/embed/${props.video}?autoplay=1`}  />
  )
}
