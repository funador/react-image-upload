import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons'

const Spinner = () =>
  <div className='rolling'>
    <div className='spinner fadein'>
      <FontAwesomeIcon icon={faBowlingBall} size='5x' color='#1D3C4C' />
    </div>
  </div>

export default Spinner