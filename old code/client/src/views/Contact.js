import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import GoogleMap from '../components/Map'
import MessageBox from '../components/MessageBox'
import ContactsBox from '../components/ContactsBox'
import MapImage from '../assets/map.jpg'
import '../styles/views/Contact.scss'

const messamgeBoxData = {
  header: 'Send us a message',
  buttonText: 'Send now!'
}

class Contact extends Component {
  
  onMessageSubmit = (data) => {
    console.log('The data was sent')
  }
  
  render() {
    const bgImageStyle = {
      backgroundImage: `url(${MapImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
    
    return (
      <div
        className="contact-page"
        style={bgImageStyle}
      >
        <Helmet>
          <title>Kappe | Contact</title>
        </Helmet>
        <div className="contact-page__map">
          <GoogleMap />
        </div>
        
        <div className="contact-page__form-box">
          <div className="contact-page__descr">
            <h2 className="contact-page__header">
              Get in touch with us
            </h2>
            <p className="contact-page__text">
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
            </p>
          </div>
          
          <MessageBox
            data={messamgeBoxData}
            onCommentSubmit={this.onMessageSubmit}
          />
        </div>
        
        <ContactsBox />
      </div>
    )
  }
}

export default Contact