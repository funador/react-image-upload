import React from 'react'
import FontAwesome from 'react-fontawesome'

export default () => (
  <footer>
    <a 
      href='https://medium.com/p/cc96430eaece' 
      title='Medium Article'
      className={'small-button medium'}
    >
      <FontAwesome
        name={'medium'}
      />
    </a>
    <a 
      href='https://github.com/funador/react-image-upload' 
      title='Github repo'
      className={'small-button github'}
    >
      <FontAwesome
        name={'github'}
      />
    </a>
  </footer>
)