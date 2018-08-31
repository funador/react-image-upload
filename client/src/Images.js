import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default props => 
  props.images.map(image => {
    const id = image.public_id
    return (
      <div key={id} className='fadein'>
        <div onClick={() => props.removeImage(id)} className='delete'>
          <FontAwesomeIcon icon={faTimesCircle} size='2x' />
        </div>
        <img src={image.secure_url} alt='' />
      </div>
    )
  })