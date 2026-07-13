import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const WakeUp = () =>
  <div className={'loading-wrapper fadein'}>
    <h4>Warming up the server, one moment please...</h4>
    <div className={'loading'}>
      <div className={'background'}>
        <FontAwesomeIcon icon={faCloud} size='10x' color='#fff' />
      </div>
      <div className={'spinner'} />
    </div>
  </div>

export default WakeUp