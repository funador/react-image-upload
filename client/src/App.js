import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Notifications, { notify } from 'react-notify-toast'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import WakeUp from './WakeUp'
import { API_URL } from './config'
import './App.css'

const myColor = { 
  background: '#505050', 
  text: '#fff' 
}

export default class App extends Component {
  
  state = {
    loading: true,
    uploading: false,
    images: []
  }

  toast = notify.createShowQueue()

  componentDidMount() {
    fetch(`${API_URL}/wake-up`)
      .then(res => {
        if (res.ok) {
          return this.setState({ loading: false })  
        }
      })
  }

  onChange = e => {
    const errs = [] 
    const files = Array.from(e.target.files)

    if (files.length > 3) {
      const msg = 'Can only upload up to 3 images at a time'
      return this.toast(msg, 'custom', 2000, myColor)  
    }

    const formData = new FormData()

    files.forEach((file, i) => {
      const types = ['image/png', 'image/jpeg', 'image/gif']

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`)
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`)
      }

      formData.append(i, file)
    })

    if (errs.length) {
      return errs.forEach(err => this.toast(err, 'custom', 2000, myColor))
    }

    this.setState({ uploading: true })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({ 
        uploading: false,
        images
      })
    })
    .catch(err => {
      this.toast('Oops, something went wrong', 'custom', 2000, myColor)
      this.setState({ uploading: false })
    })
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }
  
  render() {
    const { uploading, images, loading } = this.state

    const content = () => {
      switch(true) {
        case loading:
          return <WakeUp />
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div>
        <Notifications />
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
}
